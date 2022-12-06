import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  createCity(data: Object) {
    return this.http.post('http://localhost:5000/cities', data);
  }
}
