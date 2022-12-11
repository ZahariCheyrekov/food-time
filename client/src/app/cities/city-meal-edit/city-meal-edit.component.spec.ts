import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityMealEditComponent } from './city-meal-edit.component';

describe('CityMealEditComponent', () => {
  let component: CityMealEditComponent;
  let fixture: ComponentFixture<CityMealEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityMealEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityMealEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
