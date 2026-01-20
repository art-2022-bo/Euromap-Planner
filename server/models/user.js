var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true 
    },
    password: {
        type: String,
        required: true
    },
    wishlist: [
        {
          name: { type: String, required: true },
          city: { type: String, required: true },
          country: { type: String, required: true }
        }
      ],
      travelPlanner: [
        {
          name: String,
          city: String,
          country: String,
          lat: Number,
          lng: Number
        }
      ],
    savedTravelPlan: {
    type: new mongoose.Schema({
      travelMode: {
        type: String,
        enum: ['driving', 'walking', 'bicycling', 'transit'],
        required: true
      },
      orderedMuseums: [
        {
          name: String,
          city: String,
          country: String,
          lat: Number,
          lng: Number
        }
      ],
      totalDuration: Number, // seconds
      totalDistance: Number, // meters
      steps: {
        type: Array,
        default: []
      },
      note: {
        type: String,
        default:
          "This travel plan is an estimate and may vary depending on time, traffic, and conditions."
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }),
    default: null 
  }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);