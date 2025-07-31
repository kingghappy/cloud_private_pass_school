import express from "express";
import { login, refresh, logout } from "../controllers/auth.controller.js";

const router = express.Router();


// Forward /auth/login
router.post("/login", login);

// Forward /auth/refresh
router.post("/refresh",refresh);


router.post("/", logout);

export default router
