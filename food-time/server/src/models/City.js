import mongoose from 'mongoose';

const citySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
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