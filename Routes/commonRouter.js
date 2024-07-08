const express=require('express')
const router =express.Router()
const authecontroller = require("../Controllers/autheController")
const travelController = require("../Controllers/travelsController")
const upload = require('../midleware/multer')


router.post("/usersignup",authecontroller.usersignuppost )
router.post("/travelsignup",authecontroller.travelsSignupPost)
router.post("/travelslogin",authecontroller.travelsLogin)
router.post("/userlogin",authecontroller.userLogin)
router.post("/vehicleadd",upload.array("images",10),travelController.vehicleAddPost)



module.exports=router