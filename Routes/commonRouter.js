const express=require('express')
const router =express.Router()
const authecontroller = require("../Controllers/autheController")

router.post("/usersignup",authecontroller.usersignuppost )
router.post("/travelsignup",authecontroller.travelsSignupPost)

module.exports=router