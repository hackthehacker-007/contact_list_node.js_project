const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.post('/create',homeController.populating);
router.get('/delete-contact',homeController.delete);

module.exports = router;
