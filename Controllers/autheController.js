
const userSignupModel = require('../Models/singupmodel');
const TravelsSignupModel = require('../Models/TravelsSignupModel');
const bcrypt = require("bcrypt")
const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordregex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const nameregex = /^[a-zA-Z\s'-]+$/;
const saltRounds = 10;

exports.usersignuppost=async(req,res)=>{
try{
        console.log(req.body);
        const {name,email,password,confirmpassword,place}=req.body
        const findEmail = await userSignupModel.findOne({email})  

        if(!name || !email || !place || !password){
            console.log("halo");
            return res.status(400).json({message :"full fill all the fields"
            })
        }
        if(!nameregex.test(name)){
            return res.status(400).json({message:"enter your currect name"})
        }
        if(!emailregex.test(email)){
           return res.status({message:"enter your currect email"})
        }else if(findEmail){
            return res.status(400).json({message:"user all redy exist"})
        }
        if(!password){
            return res.status(400).json
        }
        if(passwordregex.test(password)){
        }else{
            return res.status(400).json({message:"password must uppercase and lowecase and numbers"})
        }
        if(confirmpassword !== password){
           return res.status(400).json({message:"confirmpassword is not match"})
        }

       
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const data = new userSignupModel({
            name ,
            email,
            password:hashedPassword,
            place 

        })
        await data.save()

        res.status(200).json({message:"registration successfull"})
    } catch (error){
        console.log(error);
    }
}
exports.travelsSignupPost= async (req,res)=>{
    try{
        const {name, place,email,number,password, confirmpassword}=req.body

        const travelsEmail = await TravelsSignupModel.findOne({email})

        if (travelsEmail){
            return res.status(400).json({message:"user alredy exist"})
        }
        if(!name || !place || !email || !password ||!number  ){
            return res.status(400).json({message:"full fill the all the details"})
        }
        if (!nameregex.test(name)){
            return res.status(400).json({message:"enter the currect name "})
        }
        if (!emailregex.test(email)){
            return res.status(400).json({message:"enter the currect emil"})
        }
        if (!passwordregex.test(password)){
            return res.status(400).json({message:"enter the currect password"})
        }
        if (!password == confirmpassword){
            return res.status(400).json({message:"confirmpassword not match"})
        }
        
        const hashedPassword = await bcrypt.hash(password, saltRounds);



        const data =new TravelsSignupModel({
            travelsName:name,
            travelPlace:place,
            travelsNumber:number,
            password : hashedPassword, 
            travelsEmail:email
        })
        await data.save()

        res.status(200).json({message:"registration successfull"})


    }catch (error){
        console.log(Error)

    }
}

exports.travelsLogin = async (req, res)=>{
    try{
        const {password,name}=req.body
        const user = await TravelsSignupModel.findOne({travelsEmail:name});
        const passwordMatch = await bcrypt.compare(password, user.password);
        const adminAuthentication = user.adminAuthentication      
        console.log("user name and password mismatch");
        console.log(user);
        console.log(passwordMatch);

        if (!user ){
            console.log("user name and password mismatchhhhhhhhhhhhhhhhhhhhhh");

            return res.status(400).json({message:"user name  mismatch"})
        }else if(!passwordMatch){
            console.log(passwordMatch);
            return res.status(400).json({message:"password mismach"})
        }
        else if (!adminAuthentication){
            console.log(" admin not approved");
            return res.status(400).json({message : "not approved to the admin"})
        }
        res.status(200).json({message:"travels login sucsessfull"})
        console.log("travels login sucsessfull")

    }catch(error){
        console.log(error);

    }
}

