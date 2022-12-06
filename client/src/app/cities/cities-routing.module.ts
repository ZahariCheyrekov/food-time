import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityCreateComponent } from './city-create/city-create.component';

const routes: Routes = [
  {
    path: '',
    children: [
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
