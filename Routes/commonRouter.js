const express=require('express')
const router =express.Router()
const authecontroller = require("../Controllers/autheController")



router.post("/usersignup",authecontroller.usersignuppost )
router.post("/travelsignup",authecontroller.travelsSignupPost)
router.post("/travelslogin",authecontroller.travelsLogin)
router.post("/userlogin",authecontroller.userLogin)



module.exports=router