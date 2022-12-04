import express from 'express';

import authController from '../controllers/auth-controller.js';

const router = express.Router();

router.use('/auth', authController);

export default router;

