var express = require('express');
var router = express.Router();
var { requireAuth } = require('../middleware/auth');
var travelPlannerController = require('../controllers/travelPlannerController');


// POST /travelPlanner/optimize/:username
router.post('/optimize/:username', requireAuth, travelPlannerController.optimizeRoute);

// Delete all items in Travel Planner
router.delete('/:username/all', requireAuth, travelPlannerController.deleteTravelPlanner);

// Add item to Travel planner
router.post('/:username', requireAuth, travelPlannerController.addToTravelPlanner);

router.patch('/:username', requireAuth, travelPlannerController.updateTravelPlan);

// Delete item in Travel Planner
router.delete('/:username', requireAuth, travelPlannerController.deleteItemInTravelPlanner);

// Get the travel planner
router.get('/:username', requireAuth, travelPlannerController.getTravelPlanner);


// Delete all items in Travel Planner
router.delete('/:username/all',requireAuth, travelPlannerController.deleteTravelPlanner);

//post save travel planner 
router.post('/:username/save', travelPlannerController.saveTravelPlan);

//get save travel planner 
router.get('/:username/saved', travelPlannerController.getSavedTravelPlan);

// delete saved travel plan
router.delete('/:username/saved', travelPlannerController.deleteSavedTravelPlan);



module.exports = router;

