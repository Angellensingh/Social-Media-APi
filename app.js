import express from "express";
import path from "path";
import dotenv from "dotenv";
import router from "./routes/user.js";
import connectDB from "./config/database.js";

const app = express();
dotenv.config({ path: path.join(process.cwd(), "config", ".env") });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api", router);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
