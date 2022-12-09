import Meal from '../models/Meal.js';

import * as authService from './auth-service.js';
import * as cityService from './city-service.js';


export const getCityMeals = (mealIds) => {
    return Meal.find({ _id: { $in: mealIds } });
}

export const createMeal = async (mealData, ownerId, cityId) => {
    const meal = await Meal.create(mealData);
    const mealId = meal._id;

    await authService.createUserMeal(ownerId, mealId);
    await cityService.createCityMeal(cityId, mealId);

    return meal;
}