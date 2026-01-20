// middleware/auth.js
const requireAuth = (req, res, next) => {
  if (req.session && req.session.userId) {
    next(); //user is authenticated and can continue to the route
  } else {
    res.status(401).json({ message: 'Authentication required. Please log in.' });
  }
};

const optionalAuth = (req, res, next) => {
  // always continues but req.userId might be undefined if the user isn't logged in
  next();
};
module.exports = { requireAuth, optionalAuth };