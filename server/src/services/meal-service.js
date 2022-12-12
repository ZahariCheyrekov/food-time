import Meal from '../models/Meal.js';

import * as authService from './auth-service.js';
import * as cityService from './city-service.js';
import * as reviewService from './review-service.js';


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

export const likeMeal = (mealId, userId) => {
    return Meal.findByIdAndUpdate(
        { _id: mealId },
        { $push: userId }
    );
}

export const deleteMeal = async (mealId, cityId) => {
    const { ownerId, reviews } = await Meal.findByIdAndDelete(mealId);

    await authService.removeUserMeal(ownerId, mealId);
    await cityService.removeCityMeal(cityId, mealId);
    await reviewService.removeReviews(reviews);
}