import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  userItem = environment.app.user;

  constructor() {}

  saveUser(user: IUser | void) {
    localStorage.setItem(this.userItem, JSON.stringify(user));
  }
}
