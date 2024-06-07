import Expense from "../models/Expense.js";

// create
export const addexpense=async(req,res)=>{
    try {
        const {name,price,category,color}=req.body
        const {id}=req.decoded
        const result=await Expense.create({name,price,category,color,userid:id})
        res.json({success:true,result})
    } catch (error) {
        res.status(400).json({success:false,error})
    }
}
// delete 
export const deleteexpense = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const result = await Expense.findByIdAndDelete(id);
      res.json({ success: true, result });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  };
// getall expenses
export const getexpenses = async (req, res) => {
    try {
      const {id}=req.decoded
      const result=await Expense.find({userid:id}).sort({ createdAt: 1 })
      res.json({sucess:true,result})
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  };