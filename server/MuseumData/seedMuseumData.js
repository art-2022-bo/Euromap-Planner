const mongoose = require('mongoose');
const CityMuseums = require('../models/museum'); // your model
const museumData = require('./museumData'); // the object with all cities

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/animalDevelopmentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
 
// Commands to run - 
// node server/MuseumData/seedMuseumData.js
// Must be run in the root of the directory

mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB');

  try {
    // Clear existing data
    await CityMuseums.deleteMany({});
    console.log('Existing data cleared');

    // Convert museumData object to array and add city property
    const citiesArray = Object.keys(museumData).map(cityName => {
      return { city: cityName, ...museumData[cityName] };
    });

    // Insert all cities
    await CityMuseums.insertMany(citiesArray);
    console.log('All city museums seeded successfully');

    process.exit();
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
});
