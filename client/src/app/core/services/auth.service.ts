import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  ObservableInput,
  tap,
  throwError,
} from 'rxjs';

import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';
import { IUser } from '../interfaces/IUser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);
  url = environment.app.default_url;

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private localStorageService: LocalStorageService
  ) {}

  login(email: string, password: string) {
    return this.http
      .post<IUser>(`${this.url}/auth/login`, {
        email,
        password,
      })
      .pipe(
        catchError((err) => {
          this.snackbar.open(err.error.message, 'Close', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });

          return throwError(err);
        }),
        tap((res) => {
          if (res != undefined) {
            this.localStorageService.saveUser(res);
          }
        }),
        tap(() => {
          this.loggedIn.next(true);
        }),
        tap(() =>
          this.snackbar.open('Login was successful', 'Close', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          })
        )
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
        catchError(async (err) => {
          new Error(err.error.message);
        }),
        tap((res) => {
          if (res != undefined) {
            this.localStorageService.saveUser(res);
          }
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
