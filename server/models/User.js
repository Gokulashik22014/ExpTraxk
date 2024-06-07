import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        min:4,
        unique:[true,"User already exist"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        min:4,
        unique:[true,"Email already exist"]
    },
    password:{
        type:String,
        require:[true,"Password is required"],
        min:4
    }
},{
    timestamps:true,
});

const User=mongoose.model("User",userSchema)
export default User