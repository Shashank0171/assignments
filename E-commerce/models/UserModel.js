import { Schema,model } from "mongoose";

//create cart schema
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"prodct"   //name of the productmodel
    },
    quantity:{
        type:Number,
        default:1
    }
});

const UserSchema=new Schema({
    name:{
        type:String,
        requried:[true,"Name is requried"]
    },
    email:{
        type:String,
        requried:[true,"Email is requried"],
        unique:true     //add to index
    },
    password:{
        type:String,
        requried:[true,"Password is requried"]
    },
    cart:{
        type:[cartSchema]
    },
},{
    timestamp:true,
    strict:"throw",
    versionKey:false
    })

export const UserModel=model("user",UserSchema)