import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },

  dateOfBirth: {
    type: Date,
    required: [true, "Date of Birth is required"],
    default: Date.now
  },

  mobileNumber: {
    type: Number
  },

  // for soft delete
  status: {
    type: Boolean,
    default: true
  }

}, {
  timestamps: true,
  versionKey: false,
  strict: "throw"
})

export const UserTypeModel = model("User", UserSchema)