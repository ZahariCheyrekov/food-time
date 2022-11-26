import mongoose, { mongo } from 'mongoose';

const dishSchema = mongoose.Schema({
    name: {
        type: [String, 'Name must be of type string'],
        required: true
    },
    ingredients: {
        type: [String, 'Ingredients must be of type string'],
        required: true
    },
    price: {
        type: [Number, 'Price must be a number'],
        required: true
    },
    description: {
        type: [String, 'Description must be of type string'],
        required: true
    },
    preparationTime: {
        type: [String, 'Preparation time must be of type string'],
        required: true
    },
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    likes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    reviews: [
        {
            name: String,
            rating: Number,
            comment: String,
            ref: 'User'
        }
    ]
});

const Dish = mongoose.model('Dish', dishSchema);
export default Dish;