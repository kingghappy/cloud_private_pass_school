import express from "express";

import { login, logout, refresh } from "../services/auth.service.js";

const router = express.Router()

router.post("/login", login)
router.post("/", logout)
router.post("/refresh", refresh)

export default router
