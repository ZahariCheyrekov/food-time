import { Component, OnInit } from '@angular/core';

import { CityService } from '../../core/services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  cities: any = [];

  constructor(private cityService: CityService) {}

  async ngOnInit(): Promise<void> {
    this.cityService.getCities().subscribe((res) => this.cities.push(res));
  }
}
