import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IMeal } from 'src/app/core/interfaces/IMeal';
import { MealService } from 'src/app/core/services/meal.service';

@Component({
  selector: 'app-city-meal-edit',
  templateUrl: './city-meal-edit.component.html',
  styleUrls: ['../../../assets/scss/form.scss'],
})
export class CityMealEditComponent implements OnInit {
  isLoading = true;
  meal = {} as IMeal;
  mealId: string = '';
  cityId: string = '';
  formGroup: FormGroup;

  mealEditForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    ingredients: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
    preparationTime: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  constructor(
    private mealService: MealService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
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
      this.isLoading = false;
      this.initForm(res);
    });
  }

  onEditMeal() {
    this.mealService
      .editMeal(this.cityId, this.mealId, this.formGroup.value)
      .subscribe(() => {
        this.router.navigate([`/cities/${this.cityId}/meals/${this.mealId}`]);
      });
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
