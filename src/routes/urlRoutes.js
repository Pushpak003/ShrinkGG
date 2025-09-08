import express from "express";
import {shortenUrl, redirectUrl } from "../controllers/urlController.js"
import {authMiddleware} from "../middlewares/authMIddleware.js"
import {apiLimiter} from "../middlewares/rateLimiter.js"
import {validateUrl} from "../middlewares/validater.js"

const router = express.Router();

router.post("/shorten",authMiddleware,apiLimiter,validateUrl,shortenUrl);

router.get("/:code", redirectUrl);

export default router;