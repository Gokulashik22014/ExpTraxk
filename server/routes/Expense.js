import express from "express"
import { verifyToken } from "../middlewares/verifyToken.js"
import { addexpense, deleteexpense, getexpenses } from "../controllers/Expense.js"

const router=express.Router()

router.route("/addexpense").post(verifyToken,addexpense)
router.route("/getexpenses").get(verifyToken,getexpenses)
router.route("/deleteexpense/:id").post(verifyToken,deleteexpense)
export default router