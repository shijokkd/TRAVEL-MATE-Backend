const mongoose = require("mongoose");
const vehicleAddSchima = new mongoose.Schema({
    name:{
        type:String
    },
    travelsId:{
        type: mongoose.Schema.Types.ObjectId
    },
    registerNumber:{
        type:String
    },place:{
        type:String
    },
    driverName:{
        type:String
    },
    vehicleType:{
        type:String
    },
    seatingCapacity:{
        type:String
    },
    vehicleImage:{
        type:[String]
    }
})

module.exports = mongoose.model("vehicleadd",vehicleAddSchima)