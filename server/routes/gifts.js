import express from "express";

// Helps manipulate, create, and in general work with file paths
import path from "path";

//Converts a URL to a file path
import { fileURLToPath } from "url";

import giftData from "../data/gifts.js";

// Contains URL of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

//Creating Routes
router.get("/", (req, res) => {
  res.status(200).json(giftData);
});

router.get("/:giftId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/gift.html"));
});

export default router;
