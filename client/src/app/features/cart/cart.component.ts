import { Component } from '@angular/core';
import { IMeal } from 'src/app/core/interfaces/IMeal';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  userId = '';
  meals: IMeal[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userId = this.localStorageService.getUserId();

    this.fetchUserMeals();
  }

  fetchUserMeals() {
    this.userService.getCartMeals(this.userId).subscribe((res: any) => {
      this.meals = res;
    });
  }
}
