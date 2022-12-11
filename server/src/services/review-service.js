import Review from '../models/Review.js';


export const removeReviews = (reviewIds) => {
    return Review.deleteMany({ _id: { $in: reviewIds } });
}