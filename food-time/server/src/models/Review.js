import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    descritpion: {
        type: [String, 'Description must be of type string'],
        required: [true, 'Description is required']
    },
    rating: {
        type: [Number, 'Rating must be of type number'],
        required: [true, 'Rating is required']
    },
    dishId: {
        type: mongoose.Types.ObjectId,
        ref: 'Dish'
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    picture: {
        type: String,
        ref: 'User'
    }
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;