import { userApp } from './APIs/userAPI.js'
import { productApp } from './APIs/productAPI.js'
//Create HTTP server
  //Import express module
import exp from 'express'
//Create Server
const app = exp()
//Assign port number
app.listen(3000,()=>console.log("Server is running on port 3000...."))

//body parsing middleware
app.use(exp.json()) // built in middleware

app.use('/user-api',userApp)
app.use('/product-api',productApp)


