import exp from 'express'
const app = exp()

import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
import { connect } from 'mongoose'
import cookieParser from "cookie-parser";


//Body parser middleware (must come BEFORE routes)
app.use(exp.json())
//add cookie-parser middleware
app.use(cookieParser())


//Mounting API routes
app.use('/user-api', userApp)
app.use('/product-api', productApp)




// Connect to MongoDB and start server
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/anuragdb2')
        console.log("Connected to DB server successfully")
        const PORT = 4000
        app.listen(PORT, () =>console.log(`Server is running on port 4000....`))
    } catch (err) {
        console.log("Error in DB connection", err)
    }
}

connectDB()


//Error handling middleware (must be LAST)
app.use((err, req, res, next) => {
    res.status(500).json({message: "Error occurred",reason: err.message })
})



