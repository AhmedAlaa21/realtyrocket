import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console(err));

const app = express();
app.use(express.json());

app.use(cors());
app.listen(5000, () => {
  console.log("Server is listening on port 5000!!!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// handle errors through middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});
