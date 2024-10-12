import userModel from "../models/user.model.js";
import express from 'express'
const router = express.Router()

router.get('/', async(req,res)=>{
    try {
        let product = await userModel.find()
        // res.send({status: "success", playload: product})
        console.log(typeof(product))
        res.render('home', {product})
    } catch (error) {
        console.log(error)
        res.send({status: "error"})
    }
})


export default router