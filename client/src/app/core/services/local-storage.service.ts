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

  getUser(): IUser {
    const user: IUser = JSON.parse(
      localStorage.getItem(this.userItem) as string
    );
    return user;
  }

  removeUser() {
    localStorage.removeItem(this.userItem);
  }

  getUserId(): string {
    return this.getUser().user._id;
  }

  getUsername(): string {
    return this.getUser().user.name;
  }

  getUserPicture(): string {
    return this.getUser().user.picture;
  }

  isAuthenticated() {
    return this.getUser() !== null;
  }
}
