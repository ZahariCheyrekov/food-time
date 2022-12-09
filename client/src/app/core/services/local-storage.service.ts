import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  userItem = environment.app.user;

  constructor() {}

  saveUser(user: Object | void) {
    localStorage.setItem(this.userItem, JSON.stringify(user));
  }
}
