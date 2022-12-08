import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  getCities() {
    return this.http.get('http://localhost:5000/cities');
  }

  getCity(id: string | null) {
    return this.http.get(`http://localhost:5000/cities/${id}`);
  }

  createCity(data: Object) {
    return this.http.post('http://localhost:5000/cities', data);
  }

  createMeal(data: Object, cityId: string | null) {
    return this.http.post(`http://localhost:5000/cities/${cityId}`, data);
  }
}
