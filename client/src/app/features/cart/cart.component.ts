import { Component } from '@angular/core';

import { IMeal } from 'src/app/core/interfaces/IMeal';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UserService } from 'src/app/core/services/user.service';
import { MealService } from 'src/app/core/services/meal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  isLoading = true;
  userId = '';
  cart: any = [];
  meals: IMeal[] = [];
  totalPrice = 0;

  constructor(
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private mealService: MealService
  ) {}

  ngOnInit() {
    this.userId = this.localStorageService.getUserId();

    this.fetchUserMeals();
  }

  fetchUserMeals() {
    this.userService.getCartMeals(this.userId).subscribe((res: any) => {
      this.meals = res.cartMeals;
      this.cart = res.cart;

      this.calculateTotalPrice();

      console.log(this.cart);
    });
  }

  calculateTotalPrice() {
    let total = 0;

    for (let i = 0; i < this.cart.length; i++) {
      total += this.cart[i].quantity * this.meals[i].price;
    }

    this.totalPrice = Number(total.toFixed(2));
    console.log(this.totalPrice, total);
  }

  onBuy(cityId: string, mealId: string) {
    this.mealService.buyMeal(cityId, mealId, this.userId).subscribe(() => {});
  }
}
