import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fistName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
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