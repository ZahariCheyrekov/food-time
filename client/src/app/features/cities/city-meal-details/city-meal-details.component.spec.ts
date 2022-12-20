import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityMealDetailsComponent } from './city-meal-details.component';

describe('CityMealDetailsComponent', () => {
  let component: CityMealDetailsComponent;
  let fixture: ComponentFixture<CityMealDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityMealDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityMealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
