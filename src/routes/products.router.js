import { version } from "mongoose";
import userModel from "../models/user.model.js";
import express from 'express'
const router = express.Router()

router.get('/', async(req,res)=>{
    try {
        let product = await userModel.find()
        // res.send({status: "success", playload: product})
        let page = parseInt(req.query.page)
        let limite = parseInt(req.query.limite)
        if(!page) page = 1;
        let result = await userModel.paginate(
            {},
            { page, limit: limite, lean: true}
        );
        result.prevLink = result.hasPrevPage
         ? `http://localhost:8080/?page=${result.prevPage}`
         : "";
        result.nextLink = result.hasNextPage
         ? `http://localhost:8080/?page=${result.nextPage}`
         : "";
        result.isValid = !(page <= 0 || page > result.totalPages);
        
        res.render('home', result)
    } catch (error) {
        console.log(error)
        res.send({status: "error"})
    }
})

router.get("/add/:cid/carts/:pid", async(req,res)=>{
    const cid = parseInt(req.params.cid)
    const pid = req.params.pid
    try{
        if(!cid){
            let verificar = await userModel.findById({ _id: "671040335f44df9a2ecf85c6"})
            
            if(verificar){
                verificar.items.push({id: pid})
                console.log("agregado", verificar)
                let result = await userModel.updateOne({_id:'671040335f44df9a2ecf85c6'},verificar)
            }
            // await userModel.insertMany([{carrito: 1, id:[] }])
        }
        res.send("Agregado") 
    }
    catch(error){
        console.log(error)
        res.send({status: "error"})
    }
})

export default router