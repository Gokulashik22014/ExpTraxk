import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"


// importing routes
import userRouter from "./routes/User.js"
import labelRouter from "./routes/Label.js"
import expenseRouter from "./routes/Expense.js"
const server=express()
dotenv.config()

server.use(express.json())
server.use(cors())

server.use("/api/user",userRouter)
server.use("/api/label",labelRouter)
server.use("/api/expense",expenseRouter)
server.get("/",(req,res)=>{
    res.json({meassage:"successfull"})
})


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser  :true,
    useUnifiedTopology:true,
}).then(async()=>{
    server.listen(process.env.PORT,()=>console.log(`Server is listening at port ${process.env.PORT}....`))
}).catch((error)=>{
    console.log(error)
})