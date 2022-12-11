import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityCreateComponent } from './city-create/city-create.component';
import { CityCreateMealComponent } from './city-create-meal/city-create-meal.component';
import { CityMealDetailsComponent } from './city-meal-details/city-meal-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CitiesComponent,
      },
      {
        path: 'create',
        component: CityCreateComponent,
      },
      {
        path: ':id/meals',
        component: CityDetailsComponent,
      },
      {
        path: ':id/meals/create',
        component: CityCreateMealComponent,
      },
      {
        path: ':id/meals/:mealId',
        component: CityMealDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
