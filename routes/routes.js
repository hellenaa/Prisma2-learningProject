const router = require('express').Router();
const { getAbout } = require('../controllers/aboutController');
const { getHomePage } = require('../controllers/homeController');


router.get('/about', getAbout);
router.get('/', getHomePage);


module.exports = router;