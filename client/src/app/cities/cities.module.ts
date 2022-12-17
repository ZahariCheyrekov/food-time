import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CityCreateComponent } from './city-create/city-create.component';
import { AuthRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityCreateMealComponent } from './city-create-meal/city-create-meal.component';
import { CityMealDetailsComponent } from './city-meal-details/city-meal-details.component';
import { CityMealEditComponent } from './city-meal-edit/city-meal-edit.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';

@NgModule({
  declarations: [
    CityCreateComponent,
    CitiesComponent,
    CityDetailsComponent,
    CityCreateMealComponent,
    CityMealDetailsComponent,
    CityMealEditComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
  ],
})
export class CitiesModule {}
