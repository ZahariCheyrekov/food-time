import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
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
