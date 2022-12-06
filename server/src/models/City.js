import mongoose from 'mongoose';

const citySchema = mongoose.Schema({
    city: {
        type: String,
        minLength: [2, 'City must be at least 2 characters long'],
        maxLength: [50, 'City must be maximum 50 characters long'],
        required: [true, 'City is required']
    },
    picture: {
        type: String,
        validate: [/^https?:\/\//, 'Picture url must start with "http://" or "https://"'],
        required: [true, 'Picture is required']
    },
    dishes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Dish'
        }
    ]
});

const City = mongoose.model('City', citySchema);
export default City;