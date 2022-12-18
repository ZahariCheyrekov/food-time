import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  url = environment.app.default_url;

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

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
    return this.http
      .post(`${this.url}/cities/${cityId}/meals/${mealId}/review`, {
        userId,
        name,
        picture,
        description,
      })
      .pipe(
        catchError((err) => {
          this.snackbar.open(err.error.message, 'Close', {
            duration: 1500,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });

          return throwError(err);
        }),
        tap(() =>
          this.snackbar.open('Login Successful', 'Close', {
            duration: 1500,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          })
        )
      );
  }
}
