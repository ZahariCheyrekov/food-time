import Meal from '../models/Meal.js';

import * as authService from './auth-service.js';
import * as cityService from './city-service.js';


export const getMeal = (mealId) => {
    return Meal.findById(mealId);
}

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

export const editMeal = (mealId, mealData) => {
    return Meal.findByIdAndUpdate(mealId, mealData);
}

export const deleteMeal = async (mealId, cityId) => {
    const { ownerId } = await Meal.findByIdAndDelete(mealId);

    await authService.removeUserMeal(ownerId, mealId);

    //TODO: Delete reviews with mealId
}