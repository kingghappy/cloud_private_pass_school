import express from 'express';
import authenticate from '../middleware/authenticate.js';
import { changePassword, profile } from '../controllers/user.controller.js';

const router = express.Router()

router.get('/profile', authenticate, profile)
router.put('/change-pass', authenticate, changePassword)

export default router