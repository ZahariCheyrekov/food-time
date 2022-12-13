import User from '../models/User.js';

export const getUserByEmail = (email) => {
    return User.findOne({ email });
}

export const createUser = (data) => {
    return User.create(data);
}

export const buyMeal = (userId, mealId) => {
    return User.findByIdAndUpdate(
        { _id: userId },
        { $push: { cart: mealId } },
    );
}

export const createUserMeal = (ownerId, mealId) => {
    return User.findByIdAndUpdate(
        { _id: ownerId },
        { $push: { createdMeals: mealId } },
    );
}

export const removeUserMeal = (ownerId, mealId) => {
    return User.findByIdAndUpdate(
        { _id: ownerId },
        { $pull: { createdMeals: mealId } },
    );
}

export const createUserReview = (ownerId, reviewId) => {
    return User.findByIdAndUpdate(
        { _id: ownerId },
        { $push: { reviews: reviewId } },
    );
}