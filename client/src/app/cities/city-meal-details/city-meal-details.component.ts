import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMeal } from 'src/app/core/interfaces/IMeal';

@Component({
  selector: 'app-city-meal-details',
  templateUrl: './city-meal-details.component.html',
  styleUrls: ['./city-meal-details.component.scss'],
})
export class CityMealDetailsComponent implements OnInit {
  meal = {} as IMeal;
  mealId: string = '';
  cityId: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.cityId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.mealId = this.activatedRoute.snapshot.paramMap.get('mealId') as string;

    this.fetchMeal();
  }

  fetchMeal() {

  }
}
