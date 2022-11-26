import mongoose from 'mongoose';

const citySchema = mongoose.Schema({
    name: {
        type: [String, 'Name must be of type string'],
        required: true
    },
    picture: {
        type: [String, 'Picture should be of type string'],
        required: true
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