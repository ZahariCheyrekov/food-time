import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, ObservableInput, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.app.default_url;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post(`${this.url}/auth/login`, {
        email,
        password,
      })
      .pipe(
        catchError(async (err) => console.log(err)),
        tap((res) => res)
      );
  }

  register(
    name: string,
    email: string,
    password: string,
    repeatPassword: string
  ) {
    return this.http
      .post(`${this.url}/auth/register`, {
        name,
        email,
        password,
        repeatPassword,
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
