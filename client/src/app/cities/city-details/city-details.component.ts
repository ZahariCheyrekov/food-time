import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CityService } from 'src/app/core/services/city.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
})
export class CityDetailsComponent implements OnInit {
  cityId: string | null = '';
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
    this.cityService.getCity(this.cityId).subscribe((res) => console.log(res));
  }
}
