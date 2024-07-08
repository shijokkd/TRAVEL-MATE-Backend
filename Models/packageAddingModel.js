const mongoose =require("mongoose")
const packageaddSchema =  new mongoose.Schema({
    name:{type:String},
    activities:{type:String},
    expirationdate:{type:String},
    destination:{type:String},
    startingplace:{type:String},
    totalmembers:{type:String},
    travelsId:{type:mongoose.Schema.Types.ObjectId},
    imagepath:{type:[String]},
})

module.exports = mongoose.model("packageadd",packageaddSchema)