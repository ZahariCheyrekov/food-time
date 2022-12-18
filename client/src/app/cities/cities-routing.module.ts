import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityCreateComponent } from './city-create/city-create.component';
import { CityCreateMealComponent } from './city-create-meal/city-create-meal.component';
import { CityMealDetailsComponent } from './city-meal-details/city-meal-details.component';
import { CityMealEditComponent } from './city-meal-edit/city-meal-edit.component';
import { AuthGuard } from '../core/guards/auth.guard';

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
        canActivate: [AuthGuard],
      },
      {
        path: ':id/meals',
        component: CityDetailsComponent,
      },
      {
        path: ':id/meals/create',
        component: CityCreateMealComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id/meals/:mealId',
        component: CityMealDetailsComponent,
      },
      {
        path: ':id/meals/:mealId/edit',
        component: CityMealEditComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
