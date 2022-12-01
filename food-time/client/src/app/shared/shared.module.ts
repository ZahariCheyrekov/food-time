import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [NavigationComponent, FooterComponent],
})
export class SharedModule {}
