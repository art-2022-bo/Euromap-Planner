var User = require('../models/user');

// ADD to wishlist.    http://localhost:3000/api/wishlist/<username>
exports.addToWishlist = async (req, res) => {
  try {
    const username = req.params.username;
    const item = req.body.item;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Check if the item is already in the wishlist
    const exists = user.wishlist.some(
          (wish) => 
            wish.name === item.name &&
            wish.city === item.city &&
            wish.country === item.country
      );
    
      if (exists) {
        return res.status(200).json({ 
          message: "Item is already added to wishlist",
          _links: {
            self: {
              href: `/api/wishlists/${username}`,
              method: "GET"
            }
          }
        });
      }
    

    user.wishlist.push({ name: item.name, city: item.city, country: item.country });
    await user.save();


    res.status(200).json({
      message: "Item added to wishlist",
      wishlist: user.wishlist,
      _links: {
        self: {
          href: `/api/wishlists/${username}`,
          method: "GET"
        },
        deleteItem: {
          href: `/api/wishlists/${username}`,
          method: "DELETE"
        }
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET wishlist
exports.getWishlist = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ wishlist: user.wishlist });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE wishlist item
exports.deleteWishlist = async (req, res) => {
  try {
    const username = req.params.username;
    const { name } = req.body; // name of the museum to remove

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.wishlist = user.wishlist.filter(item => item.name !== name);
    await user.save();

    res.status(200).json({
      message: "Item removed from wishlist",
      wishlist: user.wishlist,
      _links: {
        self: {
          href: `/api/wishlists/${username}`,
          method: "GET"
        },
        addItem: {
          href: `/api/wishlists/${username}`,
          method: "POST"
        }
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE all wishlist items: http://localhost:3000/api/wishlists/<username>/all
exports.deleteAllWishlist = async (req, res) => {
  try {
    const username = req.params.username;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Clear the wishlist
    user.wishlist = [];
    await user.save();

    res.status(200).json({
      message: "All wishlist items removed",
      wishlist: user.wishlist
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};