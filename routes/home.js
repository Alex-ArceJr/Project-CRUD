const express = require('express')
const router = express.Router()
//router object created from exppres router
const homeController = require('../controllers/home')

//requiring contoller funciton from home controller

router.get('/', homeController.home)

//export router object
module.exports = router;
