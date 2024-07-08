const express=require('express')
const router =express.Router()
const travelController = require("../Controllers/travelsController")
const upload = require("../midleware/multer")



router.post("/vehicleadd",upload.array("images",10),travelController.vehicleAddPost)
router.post("/packageadd", upload.array("images",15),travelController.packageadd)


module.exports=router