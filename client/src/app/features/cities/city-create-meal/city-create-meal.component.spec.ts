import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCreateMealComponent } from './city-create-meal.component';

describe('CityCreateMealComponent', () => {
  let component: CityCreateMealComponent;
  let fixture: ComponentFixture<CityCreateMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCreateMealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityCreateMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
