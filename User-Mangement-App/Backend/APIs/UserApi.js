// Import express
import exp from 'express'
// Import User model
import { UserTypeModel } from '../models/UserModel.js'
export const UserApp = exp.Router()

//Create User
UserApp.post('/user', async (req, res, next) => {
    try {
      console.log("Incoming body:", req.body)
  
      const newUserDocument = new UserTypeModel(req.body)
  
      const user = await newUserDocument.save()
  
      res.status(201).json({
        message: "User Created",
        payload: user
      })
  
    } catch (err) {
      console.log("FULL BACKEND ERROR:")
      console.log(err) 
      next(err)
    }
  })

//Read all Users
UserApp.get('/user', async (req, res) => {
    // Fetch users whose status is true (active users)
    const users = await UserTypeModel.find({ status: true })
    // Send response
    res.status(200).json({ message: "All Users",payload: users})
})

//Get User by Id
UserApp.get('/user/:id', async (req, res) => {
    // Get id from URL parameters
    const id = req.params.id
    // Find user by MongoDB  ID
    const user = await UserTypeModel.findOne(id,{status:true})
    if(!user){
        res.status(400).json({message:"User not Found" })
    }
    // Send response
    res.status(200).json({message: "User Found",payload: user})
})

//delete user by Id(Soft Delete)
UserApp.put('/user/:id', async (req, res) => {
    // Get id from URL parameters
    const id = req.params.id
    // Soft delete: Instead of removing document from DB and update status field
    let user=await UserTypeModel.findByIdAndUpdate(id,{$set:{ status: false }})
    if(!user){
        res.status(400).json({message:"User not Found" })
    }
    // Send response
    res.status(200).json({message: "User removed" })
})


//Activate the User(change the status to true)
//PUT and PATCH
UserApp.patch('/user/:id',async (req,res)=>{
    const id = req.params.id
    // Soft delete: Instead of removing document from DB and update status field
    let user=await UserTypeModel.findByIdAndUpdate(id,{ status: true },{new:true})
    if(!user){
        res.status(400).json({message:"User not Found" })
    }
    // Send response
    res.status(200).json({message: "User Activated", payload:user})
})