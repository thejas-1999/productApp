import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.route.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/", productRouter);

app.listen(5000, () => {
  connectDB();
  console.log(`Server is running on http://localhost:5000`);
});
