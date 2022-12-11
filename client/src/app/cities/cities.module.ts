import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { CityCreateComponent } from './city-create/city-create.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './cities-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityCreateMealComponent } from './city-create-meal/city-create-meal.component';
import { CityMealDetailsComponent } from './city-meal-details/city-meal-details.component';

@NgModule({
  declarations: [
    CityCreateComponent,
    CitiesComponent,
    CityDetailsComponent,
    CityCreateMealComponent,
    CityMealDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule,
  ],
})
export class CitiesModule {}
