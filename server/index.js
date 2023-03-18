import express from "express";
const app = express();
import route from "./route/route.js";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();


app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/info", route);

mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to Mongodb");
  } catch (err) {
    console.log(err);
  }
};
app.listen(5000, () => {
  connect();
  console.log("Server is running");
});
