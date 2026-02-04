import { Schema,model} from "mongoose";


  const ProductSchema=new Schema({
    productName:{
        type:String,
        requried:[true,"Product nmae requried"]
            },
    price:{
        type:Number,
        requried:[true,"Product price requried"]
    },
    brand:{
        type:String,
        requried:[true,"Product brand requried"]
    },
  },{
    timestamp:true,
    strict:"throw",
    versionKey:false
    })

  export const ProductModel=model("prodct",ProductSchema)