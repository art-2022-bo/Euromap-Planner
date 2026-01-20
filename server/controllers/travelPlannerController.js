var User = require('../models/user');
var CityMuseums = require('../models/museum');


// Add to the Travel Planner
// Postman URL - POST {{host}}/api/travelPlannerLists/{{username}}
exports.addToTravelPlanner = async (req, res) => {
  try {
    const username = req.params.username;
    const item = req.body.item;

    const user = await User.findOne({ username: new RegExp(`^${username.trim()}$`, 'i') });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.travelPlanner.length > 0){
        const acceptedCountry = user.travelPlanner[0].country.toLowerCase();
        if (item.country.toLowerCase() !== acceptedCountry){
            return res.status(200).json({
                message:`You can only add museums from ${user.travelPlanner[0].country} to your Travel Planner.`
            });
        }
    }

    const museumExists = user.travelPlanner.some(
        (travelPlannerItem) => travelPlannerItem.name.toLowerCase() === item.name.toLowerCase()
     );

    if (museumExists){
        return res.status(200).json({message: "This museum is already in your Travel Planner."});
    }

    // Push museum with lat/lng
    user.travelPlanner.push({ 
      name: item.name, 
      city: item.city, 
      country: item.country,
      lat: item.lat,
      lng: item.lng
    });

    await user.save();

    res.status(200).json({
      message: "Item added to your Travel Planner",
      travelPlanner: user.travelPlanner
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete an item from Travel Planner 
// Postman URL - DELETE {{host}}/api/travelPlannerLists/{{username}}
exports.deleteItemInTravelPlanner = async (req, res) => {
  try {
    const username = req.params.username;
    const { name } = req.body; 

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.travelPlanner = user.travelPlanner.filter(item => item.name !== name);
    await user.save();

    res.status(200).json({
      message: "Item removed from Travel Planner",
      travelPlanner: user.travelPlanner
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get the travel planner
// Postman URL - GET {{host}}/api/travelPlannerLists/{{username}}
exports.getTravelPlanner = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ travelPlanner: user.travelPlanner });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete everything from Travel Planner
// Postman URL - DELETE {{host}}/api/travelPlannerLists/{{username}}/all
exports.deleteTravelPlanner = async (req, res) => {
  try {
    const username = req.params.username;
    
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete all items from travel planner
    user.travelPlanner = [];
    await user.save();

    res.status(200).json({
      message: "All items in Travel Planner deleted successfully",
      travelPlanner: user.travelPlanner
    });
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

// Postman URL - POST {{host}}/api/travelPlannerLists/optimize/{{username}}
exports.optimizeRoute = async (req, res) => {
  try {
    const username = req.params.username;
    const { userLocation, museums, travelMode } = req.body;

    // Validate request
    if (!userLocation || !museums || museums.length === 0 || !travelMode) {
      return res.status(400).json({ message: "Missing required data" });
    }

    const mode = travelMode.toLowerCase();
    const allowedModes = ['driving', 'walking', 'bicycling', 'transit'];
    if (!allowedModes.includes(mode)) {
      return res.status(400).json({ message: "Invalid travel mode" });
    }

    // Fetch user
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Map requested museum names to travelPlanner entries
    const museumsFromRequest = museums
      .map(name =>
        user.travelPlanner.find(m => m.name.toLowerCase() === name.toLowerCase())
      )
      .filter(Boolean);

    if (museumsFromRequest.length === 0) {
      return res.status(400).json({
        message: "None of the requested museums are in your Travel Planner"
      });
    }

    // Build waypoint locations
    const waypointLocations = museumsFromRequest.filter(m => m.lat != null && m.lng != null);

    if (waypointLocations.length === 0) {
      return res.status(200).json({ success: false, message: "Museums missing coordinates" });
    }

    // Prepare Google Directions params
    const params = {
      origin: `${userLocation.lat},${userLocation.lng}`,
      destination: `${userLocation.lat},${userLocation.lng}`, // default for round trip
      mode,
      key: process.env.GOOGLE_MAPS_API_KEY
    };

    // Transit mode logic
    if (mode === 'transit') {
      params.optimizeWaypoints = false;
      params.departure_time = 'now';

      if (waypointLocations.length === 0) {
        return res.status(200).json({ success: false, message: 'No museums with coordinates for transit.' });
      }

      if (waypointLocations.length === 1) {
        // Only one museum: set as destination
        params.destination = `${waypointLocations[0].lat},${waypointLocations[0].lng}`;
        params.waypoints = [];
      } else {
        // Multiple museums: API limitation
        return res.status(200).json({ success: false,
          message: 'Transit mode only supports one museum as a destination due to Google API limitations.'
        });
      }
    } else {
      // Non-transit modes: round trip with optimization
      params.optimizeWaypoints = true;
      params.waypoints = waypointLocations.map(m => `${m.lat},${m.lng}`);
      if (mode === 'driving') params.departure_time = 'now';
    }

    // Call Google Directions API
    const response = await client.directions({ params });

    if (
      response.data.status === 'ZERO_RESULTS' ||
      response.data.status === 'NOT_FOUND' ||
      !response.data.routes ||
      response.data.routes.length === 0
    ) {
      return res.status(200).json({ success: false,
        message:
          "Your starting location is too far from the selected museums. Please try a closer location."
      });
    }
    const route = response.data.routes[0];

    // Determine ordered museums
    let orderedMuseums;
    if (mode === 'transit') {
      // Only one museum
      orderedMuseums = waypointLocations;
    } else {
      // Optimized order for other modes
      orderedMuseums = route.waypoint_order.map(i => waypointLocations[i]);
    }

    // Totals
    const totalDistance = route.legs.reduce((acc, leg) => acc + leg.distance.value, 0);
    const totalDuration = route.legs.reduce((acc, leg) => acc + leg.duration.value, 0);

    res.status(200).json({
      orderedMuseums,
      totalDistance,
      totalDuration,
      steps: route.legs.map(leg => leg.steps),
      polyline: route.overview_polyline.points,
      waypointOrder: route.waypoint_order,
      summary: route.summary,
      warnings: route.warnings
    });

  } catch (err) {
      console.error("Error in optimizeRoute:", err.response?.data || err);

      const googleStatus = err.response?.data?.status;

      // Handle specific Google Directions errors
      if (googleStatus === 'MAX_ROUTE_LENGTH_EXCEEDED') {
        return res.status(200).json({ success: false,
          message:
            "The selected museum(s) are too far apart to calculate a single route. " +
            "Please remove some museums or choose a closer starting location."
        });
      }

      if (googleStatus === 'ZERO_RESULTS') {
        return res.status(200).json({ success: false,
          message:
            "No route could be found between your location and the selected museums."
        });
      }

      return res.status(500).json({
        message: "Failed to optimize route. Please try again later."
      });
      }
  };

  // PATCH /travelPlanner/:username
  exports.updateTravelPlan = async (req, res) => {
    try {
      const username = req.params.username;
      const { userLocation, travelMode } = req.body;
  
      if (!userLocation || !travelMode) {
        return res.status(400).json({ message: "Missing required data" });
      }
  
      // normalize & validate travel mode (FIX)
      const mode = travelMode.toLowerCase();
      const allowedModes = ['driving', 'walking', 'bicycling', 'transit'];
      if (!allowedModes.includes(mode)) {
        return res.status(400).json({ message: "Invalid travel mode" });
      }
  
      const user = await User.findOne({ username });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      const museums = user.travelPlanner;
      if (museums.length === 0) {
        return res.status(200).json({
          message: "Travel Planner is empty",
          travelPlanner: []
        });
      }
  
      // FIX: same waypoint format as optimizeRoute
      const waypoints = museums
        .filter(m => m.lat != null && m.lng != null)
        .map(m => `${m.lat},${m.lng}`);
  
      if (waypoints.length === 0) {
        return res.status(400).json({ message: "Museums missing coordinates" });
      }
  
      const params = {
        origin: `${userLocation.lat},${userLocation.lng}`,
        destination: `${userLocation.lat},${userLocation.lng}`,
        waypoints,
        optimizeWaypoints: true,
        mode,
        key: process.env.GOOGLE_MAPS_API_KEY
      };
  
      if (mode === 'driving' || mode === 'transit') {
        params.departure_time = 'now';
      }
  
      const response = await client.directions({ params });
  
      if (!response.data.routes || response.data.routes.length === 0) {
        return res.status(500).json({ message: "No route found" });
      }
  
      const route = response.data.routes[0];
  
      const orderedMuseums = route.waypoint_order.map(
        i => museums[i]
      );
  
      const totalDistance = route.legs.reduce(
        (acc, leg) => acc + leg.distance.value,
        0
      );
  
      const totalDuration = route.legs.reduce(
        (acc, leg) => acc + leg.duration.value,
        0
      );
      let transitSteps = [];

      if (mode === 'transit') {
        transitSteps = route.legs.map(leg =>
          leg.steps
            .filter(step => step.travel_mode === 'TRANSIT' && step.transit_details)
            .map(step => {
              const td = step.transit_details;
              return {
                vehicle: td.line.vehicle.name,
                vehicleType: td.line.vehicle.type,
                lineName: td.line.short_name || td.line.name,
                departureStop: td.departure_stop.name,
                arrivalStop: td.arrival_stop.name,
                numStops: td.num_stops
              };
            })
        );
      }

      res.status(200).json({
        orderedMuseums,
        totalDistance,
        totalDuration,
        steps: transitSteps,
        polyline: route.overview_polyline.points
      });
  
    } catch (err) {
      console.error("Error in updateTravelPlan:", err.response?.data || err);
      res.status(500).json({
        message: err.message || "Unknown error",
        error: err.response?.data || null
      });
    }
  };

// POST /travelPlanner/:username/save
exports.saveTravelPlan = async (req, res) => {
  try {
    const username = req.params.username;
    const { travelMode, orderedMuseums, totalDistance, totalDuration, steps } = req.body;

    if (!travelMode || !orderedMuseums || orderedMuseums.length === 0) {
      return res.status(400).json({ message: "Missing required travel plan data" });
    }

    if (travelMode === 'transit' && JSON.stringify(steps).length > 20_000) {
      return res.status(200).json({ success: false,
        message:
          "Transit route is too long to save. Please choose a closer starting location."
      });
    }

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    user.savedTravelPlan = {
      travelMode,
      orderedMuseums,
      totalDistance,
      totalDuration,
      steps: travelMode === 'transit' ? steps : [],
      note: "This travel plan is an estimate and may vary depending on time, traffic, and conditions.",
      createdAt: new Date()
    };

    await user.save();

    res.status(200).json({
      message: "Travel plan saved successfully",
      savedTravelPlan: user.savedTravelPlan
    });

  } catch (err) {
    console.error("Error saving travel plan:", err);
    res.status(500).json({ message: err.message });
  }
};

// GET /travelPlanner/:username/saved
exports.getSavedTravelPlan = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      savedTravelPlan: user.savedTravelPlan || null
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// DELETE {{host}}/api/travelPlannerLists/{{username}}/saved
exports.deleteSavedTravelPlan = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.savedTravelPlan = null;

    await user.save();

    res.status(200).json({
      message: 'Saved travel plan deleted successfully'
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to delete saved travel plan',
      error: err.message
    });
  }
};
  
