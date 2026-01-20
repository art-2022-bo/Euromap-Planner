const CityMuseums = require('../models/museum');
const {fetchOpeningHours} = require('../MuseumData/fetchHours');

// Postman URL - http://localhost:3000/api/museums/<cityName>
exports.getCityMuseums = async (req, res) => {
  try {
    // The city from the URL
    const cityName = req.params.city;   

    // Find the city (case-insensitive)
    const museumData = await CityMuseums.findOne({ city: new RegExp(`^${cityName}$`, 'i') });

    if (!museumData) {
      return res.status(404).json({ message: "City not found" });
    }
    
    const museumCategories = ['history' , 'art'];
    const now = Date.now();

    for (const category of museumCategories){
      if (!museumData[category]) continue;
      
      for (const museum of museumData[category]){
        const lastUpdated = museum.lastUpdated ? new Date(museum.lastUpdated).getTime() : 0;
        const timeDifference = now - lastUpdated > 24*60*60*1000;

        if (timeDifference){
          console.log('Updating hours for : ${museum.name} (${museumData.city})');

          const openingHours = await fetchOpeningHours(museum.name, museumData.city);
          
          if (openingHours){
            museum.generalOpening = openingHours.generalOpening;
            museum.today = openingHours.today;
            museum.lastUpdated = new Date();
          }
        }
      }
    }
    await museumData.save();
    return res.json(museumData);
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
