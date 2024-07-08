const packageAddModel = require("../Models/packageAddingModel")
const vehiclesAddModel = require("../Models/vehicleAddModels")
exports.vehicleAddPost = async (req,res)=>{
    try{
        console.log(req.files)
        console.log(req.body);
        const {name,regnumber,city,drivername,type,capacity}=req.body

        if (!req.body ){return res.status(400),json({message:"files is require"})}
        if(!name){return res.status(400).json({message:"name is require"})}
        if(!regnumber){return res.status(400).json({message:"register number is require"})}
        if(!city){return res.status(400).json({message:"city is require"})}
        if(!drivername){return res.status(400).json({message:"driver name is require"})}
        if(!type){return res.status(400).json({message:"vehicle type is require"})}
        if(!capacity){return res.status(400).json({message:"seating capacity  is require"})}

        const imagepath = req.files.map(file=>file.path)
        console.log(imagepath)

        const data = new vehiclesAddModel({
            name,
            registerNumber:regnumber,
            place:city,
            driverName:drivername,
            vehicleType:type,
            seatingCapacity:capacity,
            vehicleImage:imagepath,
            // travelsId:
        })

        await data.save()

        return res.status(200).json({message:"data save sucsessfull"})


    }catch (error){
        console.log(error);
        return res.status(500).json({message:"server side error"})
    }
}

exports.packageadd= (req,res)=>{
    try{
        console.log(req.body);
        console.log(req.files);
        const {name,startingplace,destination,expirationdate,totalmembers,activities}=req.body
        const activities1= JSON.parse(activities)
        console.log(activities1);
        
        if (!name){return res.status(200).json({message:"name is requier"})}
        if (!startingplace){return res.status(200).json({message:"starting place is requier"})}
        if (!destination){return res.status(200).json({message:"destination is requier"})}
        if (!expirationdate){return res.status(200).json({message:"expiration date is requier"})}
        if (!totalmembers){return res.status(200).json({message:"total members is requier"})}
       
        const data = new packageAddModel({
            name,destination,expirationdate,totalmembers,startingplace,
            activities:activities1.value
        })
        data.save()

       
    }catch (error){
       console.log(error);
    }
}