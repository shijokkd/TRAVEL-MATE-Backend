exports.usersignuppost=async(req,res)=>{
    try{
        const emailregex ="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        const passwordregex = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        const nameregex = "^[a-zA-Z\s'-]+$"
        console.log(req.body);
        const {name,email,password,confirmpassword}=req.body

        if(!name || !email || !password){
            return res.status(400).json({message :"full fill all the fields"})
        }
        if(!nameregex.test(name)){
            res.status(400).json({message:"enter your currect name"})
        }
        if(!emailregex.test(email)){
            res.status({message:"enter your currect email"})
        }else if(email){

        }
        if(!passwordregex.test(password)){
            res.status(400).json({message:"password must uppercase and lowecase and numbers"})
        }
        if(!confirmpassword === password){
            res.status(400).json({message:"confirmpassword is not match"})
        }
    }catch{

    }

    
}