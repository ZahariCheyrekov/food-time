import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: [5, 'Name should be at least 5 characters long'],
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        unique: [true, 'Email is already in use'],
        minLength: [6, 'Email should be at least 6 characters long'],
        validate: (email) => {
            const regex = /\b(?<name>[A-Za-z]+).*\@(?<domain>[A-Za-z]+)\.(?<extension>[A-Za-z]+)\b/g
            if (!email.match(regex)) {
                throw new Error('The email should be in format: "john@gmail.com" or "john.doe@gmail.com"');
            }
        },
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        minLength: [6, 'Password must be at least 6 characters long'],
        required: [true, 'Password is required']
    },
    picture: {
        type: String,
    },
    createdMeals: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Meal'
        }
    ],
    likedMeals: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Meal'
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