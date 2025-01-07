import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), "config", ".env") });
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DB is connected");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
  }
};

export default connectDB;
