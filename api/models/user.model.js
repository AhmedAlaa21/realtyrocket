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
    avatar: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    },
  },
  {
    timestamps: true, // will automatically add latest and updated timestamps
  }
);

const User = mongoose.model("User", userSchema);

export default User;
