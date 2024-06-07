import mongoose from "mongoose";
import { Schema } from "mongoose";
const labelSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    color:{
        type:String,
        require:true
    },
    userid:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

const Label=mongoose.model("Label",labelSchema)
export default Label
