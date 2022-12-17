import { Component, OnInit } from '@angular/core';
import { ICity } from 'src/app/core/interfaces/ICity';

import { CityService } from '../../core/services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  isLoading = true;
  cities: ICity[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.cityService.getCities().subscribe((res: any) => {
      this.cities = res;
      this.isLoading = false;
    });
  }
}
