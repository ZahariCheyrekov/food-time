import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as authService from '../services/auth-service.js';
import { SALT, TOKEN_EXPIRATION_TIME } from '../constants/app-constants.js';


const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await authService.getUserByEmail(email);

        if (!existingUser) {
            res.status(404).json({ message: 'User doesn\'t exist.' });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            res.status(400).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET, { expiresIn: TOKEN_EXPIRATION_TIME });

        res.status(200).json({ result: existingUser, token });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
});

router.post('/register', async (req, res) => {
    const { name, email, password, repeatPassword } = req.body;
    console.log(req.body)
    try {
        const existingUser = await authService.getUserByEmail(email);

        if (existingUser) {
            res.status(400).json({ message: 'User already exists.' });
        }

        if (password !== repeatPassword) {
            res.status(400).json({ message: 'Passwords don\'t match.' });
        }

        const hashedPassword = await bcrypt.hash(password, SALT);

        const result = await authService.createUser({ name, email, password: hashedPassword });

        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET, { expiresIn: TOKEN_EXPIRATION_TIME });

        res.status(200).json({ result, token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong.' });
    }
});

export default router;