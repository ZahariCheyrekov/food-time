import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  userId = '';
  faCartPlus = faCartPlus;
  isActive = false;

  constructor(
    public localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.localStorageService.isAuthenticated()) {
      this.userId = this.localStorageService.getUserId();
    }
  }

  disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    (window as any).onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  enableScroll() {
    window.onscroll = function () {};
  }

  onLogout() {
    this.localStorageService.removeUser();
    this.router.navigate(['/']);
  }

  toggleMenu() {
    this.isActive = !this.isActive;
    this.isActive ? this.disableScroll() : this.enableScroll();
  }
}
