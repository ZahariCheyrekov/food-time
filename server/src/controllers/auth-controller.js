import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as authService from '../services/auth-service.js';


const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await authService.getUserByEmail(email);

        if (!existingUser) {
            return res.status(404).json({ message: 'User doesn\'t exist.' });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET, { expiresIn: TOKEN_EXPIRATION_TIME });

        res.status(200).json({ result: existingUser, token });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
});

export default router;