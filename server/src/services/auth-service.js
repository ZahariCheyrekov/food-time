import User from '../models/User.js';

export const getUserByEmail = (email) => {
    return User.findOne({ email });
}

export const getUserById = (userId) => {
    return User.findById(userId);
}

export const createUser = (data) => {
    return User.create(data);
}

export const buyMeal = async (userId, mealId) => {
    const user = await getUserById(userId);

    const existingMeal = user.cart.findIndex(item => item.mealId == mealId);

    if (existingMeal !== -1) {
        user.cart[existingMeal].quantity++;

    } else {
        user.cart.push({ quantity: 1, mealId });
    }

    await User.findByIdAndUpdate(userId, user);

    return user;
}

export const removeMealFromCart = (userId, mealId) => {
    return User.findByIdAndUpdate(
        { _id: userId },
        { $pull: { cart: mealId } },
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