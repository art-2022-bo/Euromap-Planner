var mongoose = require('mongoose');

const museumSchema = new mongoose.Schema({
  name: String,

  description: String,

  link: String,

  generalOpening: String,

  image: String,

  today: String,

  externalApiId: String,

  latitude: Number, 
     
  longitude: Number,

  lastUpdated : { type: Date, default: null }

});

const citySchema = new mongoose.Schema({
  city: { type: String, required: true },

  country: String,

  history: [museumSchema],
  
  art: [museumSchema]
});

module.exports = mongoose.model('CityMuseums', citySchema);