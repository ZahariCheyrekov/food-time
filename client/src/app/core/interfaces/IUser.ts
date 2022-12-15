export interface IUser {
  token: string;
  user: {
    email: string;
    name: string;
    picture: string;
    _id: string;
  };
}

export interface IUserProfile {
  _id: string;
  name: string;
  email: string;
  password: string;
  picture: string;
  createdMeals: Array<string>;
  likedMeals: Array<string>;
  reviews: Array<string>;
  cart: Array<Object>;
}
