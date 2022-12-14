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

      this.isLoading = false;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice() {
    let total = 0;

    for (let i = 0; i < this.cart.length; i++) {
      total += this.cart[i].quantity * this.meals[i].price;
    }

    this.totalPrice = Number(total.toFixed(2));
  }

  onBuy(cityId: string, mealId: string) {
    const mealIndex = this.cart.findIndex((item: any) => item.mealId == mealId);
    this.cart[mealIndex].quantity++;

    this.calculateTotalPrice();

    this.mealService.buyMeal(cityId, mealId, this.userId).subscribe(() => {});
  }

  onRemove(cityId: string, mealId: string) {
    const mealIndex = this.cart.findIndex((item: any) => item.mealId == mealId);

    if (this.cart[mealIndex].quantity <= 1) {
      this.cart.splice(mealIndex, 1);
      this.meals.splice(mealIndex, 1);
    } else {
      this.cart[mealIndex].quantity--;
    }

    this.calculateTotalPrice();

    this.mealService
      .removeMeal(cityId, mealId, this.userId)
      .subscribe(() => {});
  }

  onBuyCartItems() {
    this.cart = [];
    this.meals = [];
    this.totalPrice = 0;

    this.userService.clearCart(this.userId).subscribe(() => {});
  }
}
