import Meal from '../models/Meal.js';


export const getCityMeals = (mealsIds) => {
    return Meal.find({ _id: { $in: [('6391c2c98b202d4df7c869e9'), ('6391c2f78b202d4df7c869ec')] } })
}