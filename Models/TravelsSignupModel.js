const mongoose = require("mongoose");
const travelsignupSchima=new mongoose.Schema({
    travelsName:{
        type:String
    },
    travelPlace:{
        type:String
    },
    travelsNumber:{
        type:Number
    },
    travelsEmail:{
        type:String
    },
    password:{
        type:String
    },
    adminAuthentication:{
        type:Boolean
    },  
})

module.exports = mongoose.model("travelsSignup",travelsignupSchima)