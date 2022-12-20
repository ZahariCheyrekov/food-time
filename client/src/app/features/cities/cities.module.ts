import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './cities-routing.module';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityMealDetailsComponent } from './city-meal-details/city-meal-details.component';
import { CityMealEditComponent } from './city-meal-edit/city-meal-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CityCreateComponent } from './city-create/city-create.component';
import { CitiesComponent } from './cities/cities.component';
import { CityCreateMealComponent } from './city-create-meal/city-create-meal.component';

@NgModule({
  declarations: [
    CityCreateComponent,
    CitiesComponent,
    CityDetailsComponent,
    CityCreateMealComponent,
    CityMealDetailsComponent,
    CityMealEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
  ],
})
export class CitiesModule {}
