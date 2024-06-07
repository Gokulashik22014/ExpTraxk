import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const info = req.headers.authorization;
    if (!info) {
      res.json({ success: true, message: "Unauthorized Access" });
      return;
    }
    const token=info.split(" ")[1]
    jwt.verify(token,process.env.TOKEN,(err,decoded)=>{
        if(err){
            res.json({success:false,message:"Invalid Token"})
            return 
        }
        // console.log(decoded)
        req.decoded=decoded
        next()
    })
  } catch (error) {}
};
