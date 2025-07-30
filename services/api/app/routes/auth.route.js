import express from "express";
import { login, refresh, logout } from "../controllers/auth.controller.js";
import authenticate from './../middleware/authenticate.js';

const router = express.Router();


// Forward /auth/login
router.post("/login", login);

// Forward /auth/refresh
router.post("/refresh",refresh);


router.post("/logout", authenticate, logout);

export default router
