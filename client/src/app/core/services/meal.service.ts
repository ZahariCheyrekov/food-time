import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { IMeal } from '../interfaces/IMeal';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  url = environment.app.default_url;

  constructor(private http: HttpClient) {}

  getMeal(cityId: string, mealId: string) {
    return this.http.get(`${this.url}/cities/${cityId}/meals/${mealId}`);
  }

  editMeal(cityId: string, mealId: string, mealData: IMeal) {
    return this.http.post(
      `${this.url}/cities/${cityId}/meals/${mealId}/edit`,
      mealData
    );
  }

  likeMeal(cityId: string, mealId: string, userId: string) {
    return this.http.post(`${this.url}/cities/${cityId}/meals/${mealId}/like`, {
      userId,
    });
  }

  deleteMeal(mealId: string, cityId: string) {
    return this.http.delete(
      `${this.url}/cities/${cityId}/meals/${mealId}/delete`
    );
  }
}
