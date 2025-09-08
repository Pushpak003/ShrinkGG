import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 min
  max: 10, // max 10 requests per minute
  message: { error: "Too many requests, try again later." }
});
