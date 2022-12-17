import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { IMeal } from 'src/app/core/interfaces/IMeal';
import { IUserProfile } from 'src/app/core/interfaces/IUser';
import { UserService } from 'src/app/core/services/user.service';
import { MealService } from 'src/app/core/services/meal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [
    './profile.component.scss',
    '../../../assets/scss/meal-list.scss',
  ],
})
export class ProfileComponent {
  isLoading = true;
  userId = '';
  user = {} as IUserProfile;
  meals: IMeal[] = [];
  likedMeals: IMeal[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private mealService: MealService
  ) {}

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId') as string;
    this.fetchUser();
  }

  async fetchUser() {
    await lastValueFrom(this.userService.getUser(this.userId)).then(
      (res: any) => {
        this.user = res.user;
        this.meals = res.meals;
        this.likedMeals = res.likedMeals;
        this.isLoading = false;
      }
    );
  }

  onBuy(mealId: string, cityId: string) {
    this.mealService.buyMeal(cityId, mealId, this.userId).subscribe(() => {});
  }
}
