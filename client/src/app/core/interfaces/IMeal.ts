export interface IMeal {
  _id: string;
  cityId: string;
  name: string;
  ingredients: string;
  price: number;
  description: string;
  preparationTime: string;
  picture: string;
  ownerId: string;
  likes: Array<string>;
  reviews: Array<string>;
}
