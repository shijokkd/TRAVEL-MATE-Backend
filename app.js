const express = require("express")
const app = express()
const port =7000
const mongoose=require("mongoose")
const cors = require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
const commonRouter=require('./Routes/commonRouter')
app.use('/api/',commonRouter)


app.listen(port,()=>{
    console.log(`server running on ${port}`)
})
mongoose.connect("mongodb://localhost:27017/TravelMate").then(()=>console.log("mongodb connected")).catch(()=>console.log("error"))