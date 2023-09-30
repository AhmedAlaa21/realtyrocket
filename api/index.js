import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console(err));

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000!!!");
});

app.use("/api/user", userRouter);
