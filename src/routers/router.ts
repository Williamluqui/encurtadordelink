import { shorten, decriptUrl } from "../controller/UrlEncodeController";
import express from "express";
import { limiterResend } from "../middleware/rateLimit";
export const router = express.Router();

router.post("/cutmyurl", shorten);
router.get("/:hashUrl", decriptUrl);
