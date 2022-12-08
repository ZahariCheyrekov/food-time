import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-create-meal',
  templateUrl: './city-create-meal.component.html',
  styleUrls: ['../../auth/auth-form.component.scss'],
})
export class CityCreateMealComponent implements OnInit {
  dummyDescription = ` Caprese salad  is a simple Italian salad, made of sliced fresh mozzarella,
  tomatoes, and sweet basil, seasoned with salt, and olive oil. It is usually
  arranged on a plate in restaurant practice. Like pizza Margherita, it
  features the colours of the Italian flag.`;

  ngOnInit() {}
}
