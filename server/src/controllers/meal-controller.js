import express from 'express';

import * as mealService from '../services/meal-service.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const {
        name,
        ingredients,
        price,
        description,
        preparationTime,
        picture,
        ownerId }
        = req.body;

    try {
        const meal = await mealService.createMeal({
            name, ingredients, price, description, preparationTime, picture, ownerId
        }, ownerId);
        res.status(201).json(meal);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong.' });
    }
})

export default router;