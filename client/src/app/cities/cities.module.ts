import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityCreateComponent } from './city-create/city-create.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './cities-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CityCreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class CitiesModule {}
