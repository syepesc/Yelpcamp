var express = require('express');
var router = express.Router();

// import index controller
const indexControllers = require('../controllers/index');


// INDEX CONTROLLERS
// GET home page
router.get('/', indexControllers.displayHomePage);

// GET campgrounds page
router.get('/campgrounds', indexControllers.displayCampgroundsPage);


module.exports = router;
