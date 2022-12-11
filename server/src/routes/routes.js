import express from 'express';

import authController from '../controllers/auth-controller.js';
import cityController from '../controllers/city-controller.js';
import mealController from '../controllers/meal-controller.js';


const router = express.Router();

router.use('/auth', authController);
router.use('/cities', cityController);
router.use('/cities', mealController);

export default router;
