// routes/museumRoutes.js
var express = require('express');
var router = express.Router();
var museumController = require('../controllers/museumController');

router.get('/:city', museumController.getCityMuseums);  

module.exports = router;
