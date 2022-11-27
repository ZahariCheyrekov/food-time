import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    descritpion: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
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