import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IMeal } from 'src/app/core/interfaces/IMeal';
import { IReview } from 'src/app/core/interfaces/IReview';
import { MealService } from 'src/app/core/services/meal.service';
import { ReviewService } from 'src/app/core/services/review.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-city-meal-details',
  templateUrl: './city-meal-details.component.html',
  styleUrls: ['./city-meal-details.component.scss'],
})
export class CityMealDetailsComponent {
  isLoading = true;
  meal = {} as IMeal;
  mealId: string = '';
  cityId: string = '';
  userId: string = '';
  reviews: IReview[] = [];
  mealLikes = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mealService: MealService,
    private reviewService: ReviewService,
    public localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.cityId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.mealId = this.activatedRoute.snapshot.paramMap.get('mealId') as string;

    try {
      this.userId = this.localStorageService.getUserId();
    } catch (error) {
      console.log(error);
    }

    this.fetchMeal();
    this.fetchMealReviews();
  }

  fetchMeal() {
    this.mealService.getMeal(this.cityId, this.mealId).subscribe((res: any) => {
      this.meal = res;
      this.mealLikes = res.likes.length;
    });
  }

  fetchMealReviews() {
    this.reviewService
      .getMealReviews(this.cityId, this.mealId)
      .subscribe((res: any) => {
        this.reviews = res;
        this.isLoading = false;
      });
  }

  onEdit() {
    this.router.navigate([`/cities/${this.cityId}/meals/${this.mealId}/edit`]);
  }

  onDelete() {
    this.mealService.deleteMeal(this.mealId, this.cityId).subscribe(() => {
      this.router.navigate([`/cities/${this.cityId}/meals`]);
    });
  }

  onBuy() {
    this.mealService
      .buyMeal(this.cityId, this.mealId, this.userId)
      .subscribe(() => {});
  }

  onLikeMeal() {
    this.mealService
      .likeMeal(this.cityId, this.mealId, this.userId)
      .subscribe(() => {});
  }

  onReview(form: NgForm) {
    const { description } = form.value;
    const name = this.localStorageService.getUsername();
    const picture = this.localStorageService.getUserPicture();

    this.reviewService
      .createReview(
        this.cityId,
        this.mealId,
        this.userId,
        name,
        picture,
        description
      )
      .subscribe(() => {});
  }
}
