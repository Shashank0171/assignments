import { Schema, model } from 'mongoose';
//create User schema(username,password,age)
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"Username is requried"],
        minLength:[4,"Minimum length should be 4"],
        maxLength:[6,'max length exceeded']
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"age should be above 18"],
        max:[25,"age should be less than 25"]
    }
});
//create User Model with schema
export const UserModel=model("user",userSchema)