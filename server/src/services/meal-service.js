import Meal from '../models/Meal.js';

import * as authService from './auth-service.js';


export const getCityMeals = (mealsIds) => {
    return Meal.find({ _id: { $in: [('6391c2c98b202d4df7c869e9'), ('6391c2f78b202d4df7c869ec')] } })
}

export const createMeal = async (mealData, ownerId) => {
    const meal = await Meal.create(mealData);
    await authService.createUserMeal(ownerId, meal._id);
    return meal;
}