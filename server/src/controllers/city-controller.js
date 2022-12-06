import express from 'express';

import * as cityService from '../services/city-service.js';

const router = express.Router();


router.post('/', async (req, res) => {
    const { city, country, picture } = req.body;

    try {
        await cityService.createCity({ city, country, picture });
        res.status(201).json({ city, country, picture });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong.' });
    }
});


export default router;