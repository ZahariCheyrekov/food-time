import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, ObservableInput, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);
  url = environment.app.default_url;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(email: string, password: string) {
    return this.http
      .post<IUser>(`${this.url}/auth/login`, {
        email,
        password,
      })
      .pipe(
        catchError(async (err) => console.log(err)),
        tap((res) => {
          this.localStorageService.saveUser(res);
        }),
        tap(() => {
          this.loggedIn.next(true);
        })
      );
  }

  register(
    name: string,
    email: string,
    password: string,
    repeatPassword: string,
    picture: string
  ) {
    return this.http
      .post<IUser>(`${this.url}/auth/register`, {
        name,
        email,
        password,
        repeatPassword,
        picture,
      })
      .pipe(
        catchError(async (err) => console.log(err)),
        tap((res) => {
          this.localStorageService.saveUser(res);
        }),
        tap(() => {
          this.loggedIn.next(true);
        })
      );
  }

  handleError(error: HttpErrorResponse | ObservableInput<any>) {
    return new Error('err');
  }
}
