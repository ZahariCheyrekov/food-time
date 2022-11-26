import mongoose from 'mongoose';

const dishSchema = mongoose.Schema({
    name: {
        type: [String, 'Name must be of type string'],
        required: [true, 'Name is required']
    },
    ingredients: {
        type: [String, 'Ingredients must be of type string'],
        required: [true, 'Ingredients are required']
    },
    price: {
        type: [Number, 'Price must be a number'],
        validate: (price) => {
            if (price <= 0) {
                throw new Error('Price must be a positive number');
            }
        },
        required: [true, 'Price is required']
    },
    description: {
        type: [String, 'Description must be of type string'],
        required: [true, 'Description is required']
    },
    preparationTime: {
        type: [String, 'Preparation time must be of type string'],
        required: [true, 'Preparation time is required']
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