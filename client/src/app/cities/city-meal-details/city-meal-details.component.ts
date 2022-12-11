import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMeal } from 'src/app/core/interfaces/IMeal';
import { MealService } from 'src/app/core/services/meal.service';

@Component({
  selector: 'app-city-meal-details',
  templateUrl: './city-meal-details.component.html',
  styleUrls: ['./city-meal-details.component.scss'],
})
export class CityMealDetailsComponent implements OnInit {
  meal = {} as IMeal;
  mealId: string = '';
  cityId: string = '';
  mealLikes = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit() {
    this.cityId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.mealId = this.activatedRoute.snapshot.paramMap.get('mealId') as string;

    this.fetchMeal();
  }

  fetchMeal() {
    this.mealService.getMeal(this.cityId, this.mealId).subscribe((res: any) => {
      this.meal = res;
      this.mealLikes = res.likes.length;
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
}
