import exp from 'express'
export const userApp=exp.Router()

let users=[];

userApp.get('/users',(req,res)=>{
    //send response to client
    res.status(200).json({message:"all users",payload:users})
})

//post req handling route(create users)
userApp.post('/users',(req,res)=>{
    //get users resources from req body
    let newuser=req.body;
    //console.log("new user:",newuser);
    //insert into users array
    users.push(newuser);
    //send response to client
    res.status(201).json({message:"user created"})
})
//Put req handling route (update users)
userApp.put('/users',(req,res)=>{
//get modified user from the client
let modifieduser=req.body;
//find the user with id in users array
let userIndex=users.findIndex((u)=>u.id === modifieduser.id);
if(userIndex=== -1){
    //if user not found,send res as "user not found"
    res.status(404).json({message:"user not found"})
}
let deletedUser=users.splice(userIndex,1,modifieduser)
res.status(200).json({message:"user modified",payload:modifieduser})
})

//read user by id
userApp.get('/users/:id',(req,res)=>{
    //read id from url parameters
    let userid=Number(req.params.id)
    //find the user with id in users array
    let user=users.find((u)=>u.id === userid)
    if(!user){
        //if user not found,send res as "user not found"
        return res.status(404).json({message:"user not found"})
    }
    //send response to client
    res.status(200).json({message:"userfound",payload:user})
})


//Delete req handling route(delete users)
userApp.delete('/users/:id',(req,res)=>{
    //read id from url parameters
    let userId=Number(req.params.id)
    //find the user with id in users array
    let userIndex=users.findIndex((u)=>u.id === userId)
    if(userIndex=== -1){
        return res.status(404).json({message:"user not found"})
    }
    let deletedUser=users.splice(userIndex,1)
    //console.log(deleteUser)
    res.status(200).json({message:"user deleted",payload:deletedUser})
})