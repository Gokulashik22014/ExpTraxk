import Label from "../models/Label.js";

// create label
export const addLabel = async (req, res) => {
  try {
    const { name, color } = req.body;
    const { id } = req.decoded;
    const result = await Label.create({ name, color, userid: id });
    res.json({ success: true, result });
  } catch (error) {
    res.statue(400).json({ success: false, error });
  }
};
// delete label
export const deletelabel = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Label.findByIdAndDelete(id);
    res.json({ success: true, result });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
//getalllabel
export const getlabels = async (req, res) => {
  try {
    const {id}=req.decoded
    const result=await Label.find({userid:id})
    res.json({sucess:true,result})
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
