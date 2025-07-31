import express from "express";

import authenticate from "./../middlewares/authenticate.js";
import { login, logout, refresh } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/", logout);
router.post("/refresh", refresh);

export default router;
