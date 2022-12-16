import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  userId = '';

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.userId = this.localStorageService.getUserId();
  }

  faCartPlus = faCartPlus;
}
