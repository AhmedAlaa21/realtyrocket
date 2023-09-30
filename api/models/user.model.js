import mongoose from "mongoose";

// create rules (schema)

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // everyone should have unique username.
    },
    email: {
      type: String,
      required: true,
      unique: true, // everyone should have unique username.
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // will automatically add latest and updated timestamps
  }
);

const User = mongoose.model("User", userSchema);

export default User;
