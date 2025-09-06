import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      min: [8, 'Must be at least 8, got {VALUE}'],
      max: 15
    }

  }, {timestamps: true}
);

export const User = mongoose.model("User", userSchema);