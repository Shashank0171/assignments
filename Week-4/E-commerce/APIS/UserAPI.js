import exp from 'express'
import { hash } from 'bcryptjs'
export const userRoute = exp.Router()
import { UserModel } from '../models/UserModel.js'
import { ProductModel } from '../models/ProductModel.js'


// create the user
userRoute.post('/user', async (req, res) => {
    try {
        let newUser = req.body

        // run validator
        await new UserModel(newUser).validate()

        // hash password
        let hashedPassword = await hash(newUser.password, 12)
        newUser.password = hashedPassword

        let newUserDoc = new UserModel(newUser)
        await newUserDoc.save()

        const { password, ...safeUser } = newUserDoc.toObject()

        res.status(201).json({
            message: "User Created",
            payload: safeUser
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// read the user
userRoute.get('/user', async (req, res) => {
    try {
        let users = await UserModel.find()
        res.status(200).json({
            message: "Users Data",
            payload: users
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// Add product to user's cart
userRoute.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
    try {
        // read uid and pid from url parameters
        let { uid, pid } = req.params

        // check the uid
        let user = await UserModel.findById(uid)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        let product = await ProductModel.findById(pid)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        // update the cart
        let modifiedUser = await UserModel.findByIdAndUpdate(
            uid,
            { $push: { cart: { product: pid } } },
            { new: true }
        ).populate("cart.product")

        res.status(200).json({
            message: "Product added to the cart",
            payload: modifiedUser
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// increase quantity
userRoute.put('/user-cart-update/user-id/:uid/product-id/:pid', async (req, res) => {
    try {
        let { uid, pid } = req.params

        // check user
        let user = await UserModel.findById(uid)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        // check product
        let product = await ProductModel.findById(pid)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        const item = user.cart.find(
            ele => ele.product.toString() === pid
        )

        if (!item) {
            return res.status(404).json({ message: "Product not in cart" })
        }

        item.quantity += 1
        await user.save()

        res.status(200).json({
            message: "Quantity updated",
            payload: user
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// read user by id
userRoute.get('/user/:id', async (req, res) => {
    try {
        let userId = req.params.id

        let UserObj = await UserModel
            .findById(userId)
            .populate('cart.product', "productName price")

        if (!UserObj) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({
            message: "User data",
            payload: UserObj
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
