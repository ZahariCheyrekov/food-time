import mongoose from 'mongoose';

const citySchema = mongoose.Schema({
    name: {
        type: [String, 'Name must be of type string'],
        required: [true, 'Name is required']
    },
    picture: {
        type: [String, 'Picture should be of type string'],
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