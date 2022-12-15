import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AboutComponent, NotFoundComponent, ProfileComponent],
  imports: [CommonModule],
})
export class FeaturesModule {}
