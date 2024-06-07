import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
//register user
export const register=async(req,res)=>{
    try {
        const {username,email,password}=req.body
        const salt=bcrypt.genSaltSync(10)
        const encyPassword=await bcrypt.hash(password,salt)
        await User.create({username,email,password:encyPassword})
        res.status(200).json({success:true})
    }catch(error){
        res.status(400).json({success:false,error})
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        const result=bcrypt.compareSync(password,user.password)
        const userInfo={email:user.email,username:user.username,id:user._id}
        if(result){
            const token=jwt.sign(userInfo,process.env.TOKEN,{
                expiresIn:"1hr"
            })
            res.status(200).json({success:true,token,userInfo})
            return
        }
    } catch (error) {
        res.status(400).json({success:false,error})
    }
}