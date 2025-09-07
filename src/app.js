import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("URL Shortener API running 🚀");
});

export default app;
