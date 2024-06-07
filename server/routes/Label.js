import express from "express"
import { addLabel, deletelabel, getlabels } from "../controllers/Label.js"
import { verifyToken } from "../middlewares/verifyToken.js"

const router=express.Router()

router.route("/addlabel").post(verifyToken,addLabel)
router.route("/getlabels").get(verifyToken,getlabels)
router.route("/deletelabel/:id").post(verifyToken,deletelabel)
export default router