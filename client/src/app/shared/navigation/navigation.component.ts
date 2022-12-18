import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  userId = '';
  faCartPlus = faCartPlus;

  constructor(public localStorageService: LocalStorageService) {}

  ngOnInit() {
    if (this.localStorageService.isAuthenticated()) {
      this.userId = this.localStorageService.getUserId();
    }
  }

  onLogout() {
    this.localStorageService.removeUser();
  }
}
