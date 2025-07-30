import express from 'express';
import { allToken, deleteToken, findToken } from '../controllers/token.controller.js';

const router = express.Router()

router.get("/all", allToken)
router.get("/find", findToken)
router.delete("/delete", deleteToken)

export default router
