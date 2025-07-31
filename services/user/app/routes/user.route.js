import express from "express";
import { getProfile, changePassword } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", getProfile);
router.put("/change-pass", changePassword);

export default router;
