import exp from 'express'
import { connect } from 'mongoose'
const app = exp()

import { userRoute } from './APIS/UserAPI.js'
import { productRoute } from './APIS/ProductAPI.js'


//middeleware parser
app.use(exp.json())


app.use("/user-api", userRoute)
app.use('/product-api', productRoute)

//connecting to database
async function connectDB() {
    try{
       await connect('mongodb://localhost:27017/ecomdb')
       console.log("database connected sucessfully")
       const PORT=4000
       app.listen(PORT,()=>console.log("server started with port number 4000...."))
    }
    catch(err){
        console.log("error in the database",err)
    }
}
connectDB()

//error handling middleware
app.use((err,req,res,next)=>{
    res.json({message:"error occured",payload:err.message})
})
