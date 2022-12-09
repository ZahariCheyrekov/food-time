import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  url = environment.app.default_url;

  constructor(private http: HttpClient) {}

  getCities() {
    return this.http.get(`${this.url}/cities`);
  }

  getCity(id: string | null) {
    return this.http.get(`${this.url}/cities/${id}`);
  }

  createCity(data: Object) {
    return this.http.post(`${this.url}/cities`, data);
  }

  createMeal(data: Object, cityId: string | null) {
    return this.http.post(`${this.url}/cities/${cityId}/meals/create`, data);
  }
}
