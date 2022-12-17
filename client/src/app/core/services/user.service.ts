import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.app.default_url;

  constructor(private http: HttpClient) {}

  getUser(userId: string) {
    return this.http.get(`${this.url}/profile/${userId}`);
  }

  getUserMeals(userId: string, mealIds: Array<string>) {
    return this.http.get(`${this.url}/profile/${userId}/meals`);
  }

  getCartMeals(userId: string) {
    return this.http.get(`${this.url}/profile/${userId}/cart`);
  }

  clearCart(userId: string) {
    return this.http.delete(`${this.url}/profile/${userId}/cart/empty`);
  }
}
