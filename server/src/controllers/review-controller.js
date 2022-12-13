import express from 'express';

import * as reviewService from '../services/review-service.js';


const router = express.Router();

router.post('/:id/meals/:mealId/review', async (req, res) => {
    const { mealId } = req.params;
    const { userId, name, description } = req.body;

    try {
        const review = reviewService.createReview(mealId, userId, name, description);
        res.status(201).json(review);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong.' });
    }
});

export default router;