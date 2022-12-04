import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, ObservableInput, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post('http://localhost:5000/auth/login', {
        email,
        password,
      })
      .pipe(
        catchError(async (err) => console.log(err)),
        tap((res) => res)
      );
  }

  handleError(error: HttpErrorResponse | ObservableInput<any>) {
    return new Error('err');
  }
}
