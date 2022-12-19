import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  url = environment.app.default_url;

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  getCities() {
    return this.http.get(`${this.url}/cities`);
  }

  getCity(id: string | null) {
    return this.http.get(`${this.url}/cities/${id}`);
  }

  createCity(data: Object) {
    return this.http.post(`${this.url}/cities`, data).pipe(
      catchError((err) => {
        this.snackbar.open(err.error.message, 'Close', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-accent'],
        });

        throw new Error(err.error.message);
      })
    );
  }

  createMeal(data: Object, cityId: string | null) {
    return this.http
      .post(`${this.url}/cities/${cityId}/meals/create`, data)
      .pipe(
        catchError((err) => {
          this.snackbar.open(err.error.message, 'Close', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });

          throw new Error(err.error.message);
        })
      );
  }
}
