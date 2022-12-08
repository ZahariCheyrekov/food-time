import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { CityService } from '../../core/services/city.service';
import { UploadService } from '../../core/services/upload.service';

@Component({
  selector: 'app-city-create-meal',
  templateUrl: './city-create-meal.component.html',
  styleUrls: ['../../../assets/scss/form.scss'],
})
export class CityCreateMealComponent {
  url: any;
  files: File[] = [];
  cityId: string | null = '';
  dummyDescription = ` Caprese salad  is a simple Italian salad, made of sliced fresh mozzarella,
  tomatoes, and sweet basil, seasoned with salt, and olive oil. It is usually
  arranged on a plate in restaurant practice. Like pizza Margherita, it
  features the colours of the Italian flag.`;

  constructor(
    private activatedRoute: ActivatedRoute,
    private uploadService: UploadService,
    private cityService: CityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cityId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  async onSubmit(form: NgForm) {
    if (!this.files[0]) {
      return;
    }

    const fileData = this.files[0];
    const data = new FormData();
    data.append('file', fileData);
    data.append('upload_preset', 'angular-cloudinary');
    data.append('cloud_name', 'dhcdh9u9h');

    await lastValueFrom(this.uploadService.uploadImage(data)).then(
      (res: any) => {
        this.url = res.secure_url;
      }
    );

    const name = form.value.name;
    const ingredients = form.value.ingredients;
    const price = form.value.price;
    const description = form.value.description;
    const preparationTime = form.value.preparationTime;

    // TODO: add owner id
    this.cityService
      .createMeal(
        {
          name,
          ingredients,
          price,
          description,
          preparationTime,
          picture: this.url,
        },
        this.cityId
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
