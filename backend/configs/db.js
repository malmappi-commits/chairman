import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected successfully");
  } catch (error) {
    console.error("mongodb connection failed:", error.message);
    process.exit();
  }
}
