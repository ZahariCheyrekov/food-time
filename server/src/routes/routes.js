import express from 'express';

import authController from '../controllers/auth-controller.js';
import cityController from '../controllers/city-controller.js';

const router = express.Router();

router.use('/auth', authController);
router.use('/cities', cityController);


export default router;
