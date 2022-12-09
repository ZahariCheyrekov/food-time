import User from '../models/User.js';

export const getUserByEmail = (email) => {
    return User.findOne({ email });
}

export const createUser = (data) => {
    return User.create(data);
}

export const createUserMeal = (ownerId, mealId) => {
    return User.findByIdAndUpdate(
        { _id: ownerId },
        { $push: { createdMeals: mealId } },
    );
}