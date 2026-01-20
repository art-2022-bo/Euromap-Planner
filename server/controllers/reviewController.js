var Review = require('../models/review');
var mongoose = require("mongoose");

// to check if the id is valid or not
function isValidID(id){
    return mongoose.Types.ObjectId.isValid(id);
}

// create a review that is either website or museum
//postman URL - POST - {{Host}}/api/reviews 
exports.createReview = async (req, res) => {
  try {
    
    let reviewsToCreate;
    let isArray = false;
    
    if (Array.isArray(req.body)) {
      isArray = true;
      reviewsToCreate = req.body;
    } else {
      reviewsToCreate = [req.body];
    }
    
    // Validate each review
    for (let i = 0; i < reviewsToCreate.length; i++) {
      const reviewData = reviewsToCreate[i];
      const { personName, reviewType, websiteReview, museumReview, museumName, museumId, city, country } = reviewData;
      
      
      // Basic validation
      if (!personName || !reviewType) {
        return res.status(400).json({ 
          error: `Review ${i + 1}: personName and review Type are required` 
        });
      }
      
      // Validate based on review type
      if (reviewType === 'website') {
        if (websiteReview === undefined || websiteReview < 1 || websiteReview > 5) {
          return res.status(400).json({ 
            error: `Review ${i + 1}: Website rating must be between 1 and 5` 
          });
        }
      } else if (reviewType === 'museum') {
        if (!museumReview) {
          return res.status(400).json({ 
            error: `Review ${i + 1}: Museum review comment is required` 
          });
        }
        if (!museumName) {
          return res.status(400).json({ 
            error: `Review ${i + 1}: Museum name is required` 
          });
        }
        if (!city) {
          return res.status(400).json({ 
            error: `Review ${i + 1}: City is required` 
          });
        }
        if (!country) {
          return res.status(400).json({ 
            error: `Review ${i + 1}: Country is required` 
          });
        }
      } else {
        return res.status(400).json({ 
          error: `Review ${i + 1}: reviewType must be either "website" or "museum"` 
        });
      }
    }
    
    // Create all reviews
    const createdReviews = await Review.create(reviewsToCreate);
    
    if (isArray) {
      res.status(201).json(createdReviews);
    } else {
      res.status(201).json(createdReviews[0]);
    }
    
  } catch (err) {
    console.error('Create review error');
    console.error('Error name:', err.name);
    console.error('Error message:', err.message);
    
    if (err.name === 'ValidationError') {
      console.error('Validation errors:');
      for (let field in err.errors) {
        console.error(`- ${field}: ${err.errors[field].message}`);
      }
    }
    
    res.status(400).json({ error: err.message });
  }
};
// get all the reviews
//postman URL - GET - {{Host}}/api/reviews?reviewType=website   (filters only website reviews)
//postman URL - GET - {{Host}}/api/reviews?sort=createdAt        (sorts by createdAt ascending)
//postman URL - GET - {{Host}}/api/reviews?sort=-websiteReview    (sorts by websiteReview descending)
exports.getReviews = async (req, res) => {
  try { 
    const filter = {};
    const { reviewType, sort } = req.query;

    // filtering
    if (reviewType) {
      filter.reviewType = reviewType;
    }

    // fetch with optional filter
    let query = Review.find(filter);

    // sorting
    if (sort) {
      query = query.sort(sort);
    }
    
    const reviews = await query.exec(); 
    res.json(reviews);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

// get a review by its id
//postman URL - GET - {{Host}}/api/reviews/{{reviewId}} 
exports.getReviewById = async (req, res) => {
  const id = req.params.id; 
  if (!isValidID(id)) {
    return res.status(400).json({ error: "Invalid review ID format" });
  }
  
  try {
    const review = await Review.findById(id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json(review);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

// update a review fully 
//postman URL - PUT - {{Host}}/api/reviews/{{reviewId}}
exports.updateReview = async (req, res) => {
    const id = req.params.id;

    if (!isValidID(id)) {
        return res.status(400).json({ error: "Invalid review ID format" });
    }
    
    try {
      const existingReview = await Review.findById(id);
      if (!existingReview) return res.status(404).json({ message: "Review not found" });
      

      const personName = req.body.personName || existingReview.personName;
      const reviewType = req.body.reviewType || existingReview.reviewType;
      
      if (!personName || !reviewType) {
        return res.status(400).json({ error: 'personName and reviewType are required for full update' });
      }
      

      const updateData = {
        ...existingReview.toObject(),
        ...req.body,
        personName,
        reviewType
      };
      
      const updated = await Review.findByIdAndUpdate(id, updateData, { 
        new: true,
        runValidators: true
      });
      if (!updated) return res.status(404).json({ message: "Review not found" });
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
};

// update a review partially 
//postman URL - PATCH - {{Host}}/api/reviews/{{reviewId}}
exports.patchReview = async (req, res) => {
    const id = req.params.id;
    if (!isValidID(id)) {
        return res.status(400).json({ error: "Invalid review ID format" });
    }
    
    try {
        const updated = await Review.findByIdAndUpdate(id, req.body, { 
          new: true,
          runValidators: true
        });
        if (!updated) return res.status(404).json({ message: "Review not found" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// delete a single review
//postman URL - DELETE - {{Host}}/api/reviews/{{reviewId}}
exports.deleteReview = async (req, res) => {
     const id = req.params.id;

    if (!isValidID(id)) {
        return res.status(400).json({ error: "Invalid review ID format" });
    }
    
    try {
      const deleted = await Review.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ message: "Review not found" });
      res.json({ message: "Review deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

// delete all the reviews
//postman URL - DELETE - {{Host}}/api/reviews
exports.deleteAllReviews = async (req, res) => {
  try {
      await Review.deleteMany({});
      res.json({ message: "All reviews deleted" });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

// get the average rating from the users rate
//postman URL - GET - {{Host}}/api/reviews/website/average-rating
exports.getAverageWebsiteRating = async (req, res) => {
  try {
      const websiteReviews = await Review.find({ reviewType: "website" });
      if (websiteReviews.length === 0) {
          return res.json({ average: 0 });
      }
      // add all the numbers and error handling
      let sum = 0;
        for (let review of websiteReviews) {
            const rating = Number(review.websiteReview);
            if (!isNaN(rating)) sum += rating;
        }
      const avg = sum / websiteReviews.length;
      res.json({ average: avg });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};