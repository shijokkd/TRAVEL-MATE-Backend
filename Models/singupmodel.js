const mongoose = require("mongoose")
const signupSchema = new mongoose.Schema({
    name : {
        type:String,
        requrie:true
    },
    email : {
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("userSignup",signupSchema)