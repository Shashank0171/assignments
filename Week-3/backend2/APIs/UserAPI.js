import exp from "express"
import { UserModel } from "../models/UserModel.js"
export const userApp=exp.Router()
import {hash,compare} from 'bcryptjs'
import { verifyToken } from "../MIDDLEWARES/verify.js"
import jwt from 'jsonwebtoken'
userApp.use(exp.json())



//USER API ROUTES

//create User
userApp.post('/users',async (req,res)=>{
    //get new user form req
    let newUser=req.body;
    //hash the password
    let hashedPassword=await hash(newUser.password,12)
    newUser.password=hashedPassword
    //craete new user document
    let newUserDoc=new UserModel(newUser)

    //save new doc
    await newUserDoc.save()
    res.json({message:"new user craeted",payload:newUserDoc})
})


//user authentication(login) route
userApp.post('/auth',async(req,res)=>{
    //get user cred obj
    let userCred=req.body
    console.log("step1")
    //check for username
    let userOfDB=await UserModel.findOne({username:userCred.username})
    //if user not found
    if(userOfDB===null){
        return res.status(404).json({message:"invalid username"})
    }
    //compare password
    let status=await compare(userCred.password,userOfDB.password)
    if(status===false){
        return res.status(404).json({message:"invalid password"})
    }
    //create signed token
    let signedToken=jwt.sign({username:userCred.username},'abcdef',{expiresIn:30})
    //save token as httponly
    res.cookie('token',signedToken,{
        httponly:true,//it is httponly cookie
        secure:false,
        sameSite:"lax"
    })
    //send the token
    res.status(200).json({message:"login sucess"})
})



//read user by id
userApp.get('/users/:id',async(req,res)=>{
    //get user id from req
    let objId=req.params.id;
    //read user from db by id
    let userObj=await UserModel.findById(objId)
    //send user to client
    res.status(200).json({message:"User data",payload:userObj})
})


//read User
userApp.get('/users',async(req,res)=>{
    //read users from db
   let users=await UserModel.find()
   //send users to client
   res.status(200).json({message:"Users data",payload:users})
})

//update User
userApp.put('/users/:id',async(req,res)=>{
    //get user id from url param
    let objId=req.params.id;
    //get updated user data from req
    let modifiedUser=req.body;
    //make update
    let latestUser=await UserModel.findByIdAndUpdate(objId,
        {$set:{...modifiedUser}},
        {new:true,runValidators:true})
    //send response
    res.json({message:"User data updated",payload:latestUser})
})



//delete User by ObjectId
userApp.delete('/users/:id',async(req,res)=>{
    //get user id from the url param
    let objId=req.params.id;
    //delete user from db
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    //send response
    res.json({message:"User removed",payload:deletedUser})
})


userApp.get('/test',verifyToken,(req,res)=>{
    res.json({message:"test route"})
})
 