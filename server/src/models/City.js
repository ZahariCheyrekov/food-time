import mongoose from 'mongoose';

const citySchema = mongoose.Schema({
    name: {
        type: String,
        minLength: [2, 'Name must be at least 2 characters long'],
        maxLength: [50, 'Name must be maximum 50 characters long'],
        required: [true, 'Name is required']
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