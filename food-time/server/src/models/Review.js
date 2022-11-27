import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    descritpion: {
        type: [String, 'Description must be of type string'],
        required: true
    },
    stars: {
        type: [Number, 'Stars must be of type number'],
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