import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import dbConnect from "./utils/dbConnect.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  dbConnect();
});
