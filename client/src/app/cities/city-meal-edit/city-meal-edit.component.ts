import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IMeal } from 'src/app/core/interfaces/IMeal';
import { MealService } from 'src/app/core/services/meal.service';

@Component({
  selector: 'app-city-meal-edit',
  templateUrl: './city-meal-edit.component.html',
  styleUrls: ['../../../assets/scss/form.scss'],
})
export class CityMealEditComponent implements OnInit {
  meal = {} as IMeal;
  mealId: string = '';
  cityId: string = '';
  formGroup: FormGroup;

  constructor(
    private mealService: MealService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.cityId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.mealId = this.activatedRoute.snapshot.paramMap.get('mealId') as string;

    this.initForm();
    this.fetchMeal();
  }

  fetchMeal() {
    this.mealService.getMeal(this.cityId, this.mealId).subscribe((res: any) => {
      this.meal = res;
      this.initForm(res);
    });
  }

  onEditMeal() {
    this.mealService
      .editMeal(this.cityId, this.mealId, this.formGroup.value)
      .subscribe((res) => res);
  }

  private initForm(meal?: IMeal) {
    this.formGroup = this.formBuilder.group({
      name: [meal?.name || ''],
      ingredients: [meal?.ingredients || ''],
      price: [meal?.price || ''],
      description: [meal?.description || ''],
      preparationTime: [meal?.preparationTime || ''],
      picture: [meal?.picture || ''],
    });
  }
}
