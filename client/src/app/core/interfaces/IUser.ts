export interface IUser {
  token: string;
  user: {
    email: string;
    name: string;
    picture: string;
    _id: string;
  };
}
