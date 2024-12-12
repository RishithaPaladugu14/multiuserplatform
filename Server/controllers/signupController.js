const Signup = require("../models/signup")
const bcrypt = require("bcrypt")

const Signups = async(req,res)=>{

    const{name,email,password}=req.body;
    try {
        const sign = await Signup.findOne({email:email});
        const hashpassword = await bcrypt.hash(password,10);
        if(sign){
            res.status(400).json({message:"User already exists"})
        }else{
            const user = await Signup.create({
                name,
                email,
                password:hashpassword,
            });
        if(user){
            res.status(200).json({message:"user registered sucessfully"})
            console.log("Registration sucess")
        }else{
            res.status(400).json({message:"Error while registration"}) 
        }
        }
    } catch (error) {
        console.log(error);
    }
};
const Logins = async(req,res)=>{


    const{email,password}=req.body;
    try {
        const sign = await Signup.findOne({email:email,password:password});
        if(sign){
            res.status(200).json({message:"User login sucessful"})
        }else{
           
            res.status(400).json({message:"User not found"}) 
        }
    
    } catch (error) {
        console.log(error);
    }
};


module.exports = {Signups,Logins};