import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICity } from 'src/app/core/interfaces/ICity';
import { IMeal } from 'src/app/core/interfaces/IMeal';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { CityService } from 'src/app/core/services/city.service';
import { MealService } from 'src/app/core/services/meal.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: [
    './city-details.component.scss',
    '../../../assets/scss/meal-list.scss',
  ],
})
export class CityDetailsComponent implements OnInit {
  isLoading = true;
  cityId: string | null = '';
  userId = '';
  city = {} as ICity;
  meals: IMeal[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private cityService: CityService,
    private mealService: MealService
  ) {}

  ngOnInit() {
    this.cityId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userId = this.localStorageService.getUserId();

    this.getCity();
  }

  getCity() {
    this.cityService.getCity(this.cityId).subscribe((res: any) => {
      this.city = res.city;
      this.meals = res.meals;
      this.isLoading = false;
    });
  }

  onBuy(mealId: string, cityId: string) {
    this.mealService.buyMeal(cityId, mealId, this.userId).subscribe(() => {});
  }
}
