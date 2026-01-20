var User = require('../models/user');
const bcrypt = require('bcrypt')

// Create a new user
// Postman URL - http://localhost:3000/api/users/createUser
exports.createUser = async (req, res) => {
  try {
    var user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all users
// Postman URL - http://localhost:3000/api/users/getUsers
exports.getUsers = async (req, res) => {
  try {
    var users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Sign Up Feature
// Postman URL - http://localhost:3000/api/users/signUp 
exports.signUp = async (req,res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(200).json({ success: false, message: 'Username and password are required' });
    }

    const existsUser = await User.findOne({username});
    if (existsUser){
      return res.status(200).json({ success: false, message: 'This username is taken. Please try again.'});
    }
    
    const digitCount = (password.match(/[0-9]/g) || []).length; 
    if (password.length < 10 || digitCount !== 2){
      return res.status(200).json({ success: false, message : 'Password must be at least 10 characters long and contain exactly 2 numbers.'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword});
    await user.save();

    res.status(200).json({success: true, message : 'Account Created'});
  } catch (err){
    res.status(500).json({ message: err.message });
  }
}

// Log In Feature
// Postman URL - http://localhost:3000/api/users/logIn
exports.logIn = async (req,res) => {
  try {
    const {username, password} = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(200).json({ success: false, message: 'Username and password are required' });
    }

    const user = await User.findOne({username});
    if (!user){
      return res.status(200).json({ success: false, message : 'User not found. Please try again.'});
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword){
      return res.status(200).json({ success: false, message : 'Incorrect Password. Please try again'});
    }
    
    // Create session
    req.session.userId = user._id;
    req.session.username = user.username;
    req.session.lastActivity = Date.now();

    res.status(200).json({ success: true,
      message: 'Login successful',
      user: { 
        id: user._id, 
        username: user.username 
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get current user's info
// Postman URL - http://localhost:3000/api/users/me
exports.getCurrentUser = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(200).json({ success: false, user: null });
    }
    
    const user = await User.findById(req.session.userId).select('-password');
    if (!user) {
      return res.status(200).json({ success: false, message: 'User not found' });
    }
    
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Logout
// Postman URL - http://localhost:3000/api/users/logout
exports.logOut = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Logout successful' });
  });
};

// Delete account feature
// Postman URL - http://localhost:3000/api/users/deleteUser 
exports.deleteUser = async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;
    
    // Validate input
    if (!password || !confirmPassword) {
      return res.status(200).json({ success: false, message: 'Password and confirmation are required' });
    }

    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.status(200).json({ success: false, message: 'User not found' });
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(200).json({ success: false, message: 'Incorrect Password. Please try again' });
    }

    if (password !== confirmPassword) {
      return res.status(200).json({ success: false, message: 'Password confirmation failed. Please try again' });
    }

    await User.findByIdAndDelete(req.session.userId);
    
    req.session.destroy((err) => {
      if (err) {
        console.error('Session destruction error:', err);
      }
    });
    
    res.clearCookie('connect.sid');
    res.status(200).json({ success: true, message: 'Account deleted successfully.' });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// User can change their password
// Postman URL - http://localhost:3000/api/users/changePassword
exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;
    
    // VALIDATE INPUT - THIS FIXES THE BCRYPT ERROR
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      return res.status(200).json({ success: false, message: 'Current password, new password, and confirmation are required' });
    }

    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.status(200).json({ success: false, message: 'User not found' });
    }

    const correctPassword = await bcrypt.compare(currentPassword, user.password);
    if (!correctPassword) {
      return res.status(200).json({ success: false, message: 'Current password is incorrect. Please try again' });
    }

    const digitCount = (newPassword.match(/[0-9]/g) || []).length; 
    if (newPassword.length < 10 || digitCount !== 2) {
      return res.status(200).json({ success: false, message: 'Password must be at least 10 characters long and contain exactly 2 numbers.' });
    }

    if (currentPassword === newPassword) {
      return res.status(200).json({ success: false, message: 'New password cannot be the same as current password. Please try a different password.' });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(200).json({ success: false, message: 'New passwords do not match. Please try again.' });
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = newHashedPassword;
    await user.save();

    res.status(200).json({ success: true, message: 'Password changed successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// User can create new account
// Postman URL - http://localhost:3000/api/users/createNewAccount
exports.createNewAccount = async (req, res) => {

  try {

    const {
      currentPassword,
      newUsername,
      newPassword,
      confirmNewPassword
    } = req.body;

    if (!currentPassword || !newPassword || !confirmNewPassword || !newUsername) {
      return res.status(200).json({ success: false, message: 'Current password, new username, new password, and confirmation are required' });
    }

    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.status(200).json({ success: false, message: 'User not found' });
    }

    // Verify current password
    const correctPassword = await bcrypt.compare(currentPassword, user.password);
    if (!correctPassword) {
      return res.status(200).json({ success: false,
        message: 'Current password is incorrect'
      });
    }
    if (user.username === newUsername) {
      return res.status(200).json({
        success: false,
        message: 'Your username cannot be the same as your previous username'
      });
    }
    // Password rules (same as signup)
    const digitCount = (newPassword.match(/[0-9]/g) || []).length;
    if (newPassword.length < 10 || digitCount !== 2) {
      return res.status(200).json({ success: false,
        message: 'Password must be at least 10 characters long and contain exactly 2 numbers.'
      });
    }

    // New password confirmation
    if (newPassword !== confirmNewPassword) {
      return res.status(200).json({ success: false,
        message: 'New passwords do not match'
      });
    }

    // Prevent reusing same password
    if (currentPassword === newPassword) {
      return res.status(200).json({success: false,
        message: 'New password must be different from current password'
      });
    }

    // Check username uniqueness (excluding current user)
    const existingUser = await User.findOne({
      username: newUsername,
      _id: { $ne: req.session.userId }
    });

    if (existingUser) {
      return res.status(200).json({ success: false,
        message: 'This username is already taken'
      });
    }

    // Update credentials
    user.username = newUsername;
    user.password = await bcrypt.hash(newPassword, 10);

    // Clear user data
    user.wishlist = [];
    user.travelPlanner = [];

    await user.save();

    // Update session username
    req.session.username = newUsername;

    res.status(200).json({ success: true,
      message:
        'New account created successfully. Previous Wishlist and travel planner have been deleted.'
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
