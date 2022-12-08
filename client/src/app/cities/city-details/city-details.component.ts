import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
})
export class CityDetailsComponent implements OnInit {
  cityId: string | null = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.cityId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCityDishes();
  }

  getCityDishes() {}
}
