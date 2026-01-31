import { Schema,model } from "mongoose";
//create the products(productId,productName,Price)
const productSchema=new Schema({
    ProductId:{
        type:Number,
        requried:true
    },
    ProductName:{
        type:String,
        requried:true
    },
    Price:{
        type:Number,
        requried:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})

export const ProductModel=model("product",productSchema)