import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  url = environment.app.default_url;

  constructor(private http: HttpClient) {}

  getMealReviews(cityId: string, mealId: string) {
    return this.http.get(
      `${this.url}/cities/${cityId}/meals/${mealId}/reviews`
    );
  }

  createReview(
    cityId: string,
    mealId: string,
    userId: string,
    name: string,
    picture: string,
    description: string
  ) {
    return this.http.post(
      `${this.url}/cities/${cityId}/meals/${mealId}/review`,
      {
        userId,
        name,
        picture,
        description,
      }
    );
  }
}
