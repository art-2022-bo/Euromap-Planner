var express = require('express');
var router = express.Router();
var { requireAuth } = require('../middleware/auth');
var wishlistController = require('../controllers/wishlistController');

// Add item to wishlist
router.post('/:username', requireAuth, wishlistController.addToWishlist);

// Get wishlist
router.get('/:username', requireAuth, wishlistController.getWishlist);

// Delete from wishlist
router.delete('/:username', requireAuth, wishlistController.deleteWishlist);
//Delete All 
router.delete('/:username/all',requireAuth, wishlistController.deleteAllWishlist);


module.exports = router;