export interface IReview {
  _id: string;
  description: string;
  mealId: string;
  reviewOwner: {
    name: string;
    picture: string;
    postedBy: string;
  };
}
