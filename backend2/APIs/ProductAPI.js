import exp from "express"
import { ProductModel } from "../models/ProductModel.js"
export const productApp=exp.Router()
productApp.use(exp.json())


//PRODUCT API ROUTES
//read product 
productApp.get('/products',async(req,res)=>{
      //read product from db
   let products=await ProductModel.find()
   //send product to client
   res.status(200).json({message:"product data",payload:products})
})


//create Product
productApp.post('/products',async(req,res)=>{
     //get new product form req
     let newProduct=req.body;
     //craete new product document
     let newProductDoc=new ProductModel(newProduct)
 
     //save new doc
     await newProductDoc.save()
     res.json({message:"new product created",payload:newProductDoc})
})


//read product by id
productApp.get('/products/:id',async(req,res)=>{
    let objId=req.params.id;
    //get product from db by id
    let productObj=await ProductModel.findById(objId)
    //send product to client
    res.json({message:"product data by id",payload:productObj})
})



//update product by id 
productApp.put('/products/:id',async(req,res)=>{
    let objId=req.params.id;
    //get updated product data from req
    let modifiedProduct=req.body;
    //make update
    let latestProduct=await ProductModel.findByIdAndUpdate(objId,
        {$set:{...modifiedProduct}},
        {new:true})
    //send response
    res.json({message:"User data updated",payload:latestProduct})
})
