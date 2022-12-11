import express from 'express';

import * as mealService from '../services/meal-service.js';

const router = express.Router();

router.get('/:id/meals/:mealId', async (req, res) => {
    const { mealId } = req.params;

    try {
        const meal = await mealService.getMeal(mealId);
        res.status(200).json(meal);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong.' });
    }
});

router.post('/:id/meals/create', async (req, res) => {
    const {
        name,
        ingredients,
        price,
        description,
        preparationTime,
        picture,
        ownerId,
        cityId
    } = req.body;

    try {
        const meal = await mealService.createMeal({
            name, ingredients, price, description, preparationTime, picture, ownerId
        }, ownerId, cityId);
        res.status(201).json(meal);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong.' });
    }
});

router.post('/:id/meals/:mealId/edit', async (req, res) => {
    const { mealId } = req.params;
    const {
        name,
        ingredients,
        price,
        description,
        preparationTime,
        picture
    } = req.body;

    try {
        const editedMeal = await mealService.editMeal(mealId, {
            name,
            ingredients,
            price,
            description,
            preparationTime,
            picture
        });
        res.status(200).json(editedMeal);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong.' });
    }
});

export default router;