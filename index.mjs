import express from "express";
import dotenv from "dotenv";
import db from "./config/db.mjs";

import errorHandler from "./utils/errorHandler.mjs";
import userRouter from "./routes/userRoutes.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Database connected successfully");
});

app.use(express.json());

app.use("/api/users", userRouter);
app.use(errorHandler);

// Start the server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
