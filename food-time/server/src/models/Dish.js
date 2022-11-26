import mongoose, { mongo } from 'mongoose';

const dishSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    preparationTime: {
        type: String,
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
   
});

const Dish = mongoose.model('Dish', dishSchema);
export default Dish;