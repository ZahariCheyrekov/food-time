import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityCreateComponent } from './city-create/city-create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CitiesComponent,
      },
      {
        path: ':id',
        component: CityDetailsComponent,
      },
      {
        path: 'create',
        component: CityCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
