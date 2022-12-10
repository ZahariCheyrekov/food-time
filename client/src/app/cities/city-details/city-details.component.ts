import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICity } from 'src/app/core/interfaces/ICity';

import { CityService } from 'src/app/core/services/city.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
})
export class CityDetailsComponent implements OnInit {
  cityId: string | null = '';
  city = {} as ICity;
  meals = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit() {
    this.cityId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCity();
  }

  getCity() {
    this.cityService.getCity(this.cityId).subscribe((res: any) => {
      this.city = res.city;
      this.meals = res.meals;
    });
  }
}
