import User from '../models/User.js';

export const getUserByEmail = (email) => {
    return User.findOne({ email });
}

export const createUser = (data) => {
    return User.create(data);
}