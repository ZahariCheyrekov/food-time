import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [NotFoundComponent, AboutComponent],
  imports: [CommonModule],
})
export class FeaturesModule {}
