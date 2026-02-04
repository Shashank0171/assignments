import exp from 'express'
export const productRoute=exp.Router()
import { ProductModel } from '../models/ProductModel.js'


//create a product
productRoute.post('/products',async(req,res)=>{
    let newProduct=req.body;
    let newProductDoc=new ProductModel(newProduct)
    await newProductDoc.save()
    res.json({message:"new product created",payload:newProductDoc})
})