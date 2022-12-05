import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    descritpion: {
        type: String,
        required: [true, 'Description is required']
    },
    rating: {
        type: Number,
        validate: (rating) => {
            if (rating <= 0 || rating > 5) {
                throw new Error('Rating must be a number between 1 and 5')
            }
        },
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