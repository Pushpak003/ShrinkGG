import express from "express";
import authRoutes from "./routes/authRoutes.js";
import urlRoutes from "./routes/urlRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/url", urlRoutes);



// Test route
app.get("/", (req, res) => {
  res.send("URL Shortener API running 🚀");
});

export default app;
