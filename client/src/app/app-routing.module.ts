import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/pages/home/home.component';
import { AboutComponent } from './features/pages/about/about.component';
import { ProfileComponent } from './features/profile/profile.component';
import { CartComponent } from './features/cart/cart.component';
import { NotFoundComponent } from './features/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'cities',
    loadChildren: () =>
      import('./cities/cities.module').then((m) => m.CitiesModule),
  },
  {
    path: 'profile/:userId',
    component: ProfileComponent,
  },
  {
    path: 'profile/:userId/cart',
    component: CartComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
