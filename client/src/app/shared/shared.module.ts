import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [NavigationComponent, FooterComponent],
})
export class SharedModule {}
