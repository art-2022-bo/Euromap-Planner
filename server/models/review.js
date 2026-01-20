// Add this line at the top of review.js
const mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    personName: {
        type: String,
        required: true,
        trim: true
    },

    reviewType: {
        type: String,
        enum: ["museum", "website"],
        required: true
    },

    websiteReview: {
        type: Number,
        min: 1,
        max: 5,
        required: function () {
            return this.reviewType === "website";
        }
    },
    
    museumReview: {
        type: String,
        required: function () {
            return this.reviewType === "museum";
        },
        trim: true
    },
    
    museumName: {
        type: String,
        required: function () {
            return this.reviewType === "museum";
        },
        trim: true
    },
    
    museumId: {
        type: String,
        trim: true
    },
    
    city: {
        type: String,
        required: function () {
            return this.reviewType === "museum";
        },
        trim: true
    },
    
    country: {
        type: String,
        required: function () {
            return this.reviewType === "museum";
        },
        trim: true
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);