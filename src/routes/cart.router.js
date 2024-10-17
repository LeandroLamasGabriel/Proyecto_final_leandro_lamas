import userModel from "../models/user.model.js";
import express from 'express'

const router = Router()

// router.get("/api/carts/:cid/", async(req,res)=>{
//     let cid = parseInt(req.params.cid)
//     try {
//         res.render('home', cart[cid] )
//     } catch (error) {
//         console.log(error)
//         res.send({status: "error"})
//     }
// })

// router.get("api/add/:pid", async(req,res)=>{
//     console.log('asd')
// })

export default router