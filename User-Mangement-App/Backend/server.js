// create HTTP server
import exp from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { UserApp } from "./APIs/UserApi.js";
import cors from "cors";

// read environment variables
config();

const app = exp();

// body parser middleware
app.use(exp.json());

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://assignments-omega-one.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// forward requests
app.use("/user-api", UserApp);

// connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log("DB Connection Successful");

    app.listen(process.env.PORT, () => {
      console.log(`Server Started on Port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("Error occurred:", err);
  }
};

connectDB();

// error handling middleware
app.use((err, req, res, next) => {
  // mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }

  // invalid object id
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  // duplicate key error
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }

  // default server error
  res.status(500).json({
    message: "Internal Server Error",
  });
});