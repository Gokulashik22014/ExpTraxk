import mongoose from "mongoose"
import { Schema } from "mongoose"
const expenseSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Name of expense is required"]
    },
    price:{
        type:Number,
        require:[true,"Price is required"]
    },
    color:{
        type:String,
        default:"bg-black"
    },
    userid:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    category:{
        require:true,
        type:String,
    }
},{
    timestamps:true,
})
const Expense=mongoose.model("Expense",expenseSchema)
export default Expense