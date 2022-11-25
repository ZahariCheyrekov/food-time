import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fistName: {
        type: [String, 'First name should be of type string'],
        minLength: [2, 'First name should be at least 2 characters long'],
        required: [true, 'First name is required']
    },
    lastName: {
        type: [String, 'Last name should be of type string'],
        minLength: [2, 'Last name should be at least 2 characters long'],
        required: [true, 'Last name is required']
    },
    email: {
        type: [String, 'Email should be of type string'],
        unique: [true, 'Email is already in use'],
        minLength: [6, 'Email should be at least 6 characters long'],
        required: [true, 'Email is required']
    },
    password: {
        type: [String, 'Password should be of type string'],
        minLength: [6, 'Password must be at least 6 characters long'],
        required: [true, 'Password is required']
    },
    picture: {
        type: [String, 'Picture should be of type string'],
    },
    createdDishes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Dish'
        }
    ],
    likedDishes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Dish'
        }
    ],
    reviews: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

const User = mongoose.model('User', userSchema);
export default User;