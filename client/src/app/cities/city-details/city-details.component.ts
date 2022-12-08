import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
})
export class CityDetailsComponent implements OnInit {
  ngOnInit() {
    this.getCityDishes();
  }

  getCityDishes() {}
}
