var express = require('express');
var router = express.Router();
var  reviewController = require('../controllers/reviewController');
var { requireAuth } = require('../middleware/auth');


router.get('/website/average-rating', reviewController.getAverageWebsiteRating);
router.post('/', requireAuth, reviewController.createReview);
router.get('/', reviewController.getReviews);
router.get('/:id', reviewController.getReviewById);
router.put('/:id',requireAuth,  reviewController.updateReview);
router.patch('/:id', requireAuth,  reviewController.patchReview);
router.delete('/',requireAuth, reviewController.deleteAllReviews);
router.delete('/:id', requireAuth, reviewController.deleteReview);

module.exports = router;