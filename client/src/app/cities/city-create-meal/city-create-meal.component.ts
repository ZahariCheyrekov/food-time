import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UploadService } from '../../core/services/upload.service';
import { CityService } from '../../core/services/city.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-city-create-meal',
  templateUrl: './city-create-meal.component.html',
  styleUrls: ['../../../assets/scss/form.scss'],
})
export class CityCreateMealComponent {
  url: any;
  files: File[] = [];
  cityId: string | null = '';
  owenrId: string = '';
  dummyDescription = ` Caprese salad  is a simple Italian salad, made of sliced fresh mozzarella,
  tomatoes, and sweet basil, seasoned with salt, and olive oil. It is usually
  arranged on a plate in restaurant practice. Like pizza Margherita, it
  features the colours of the Italian flag.`;

  mealForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    ingredients: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
    preparationTime: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private uploadService: UploadService,
    private cityService: CityService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.cityId = this.activatedRoute.snapshot.paramMap.get('id');
    this.owenrId = this.localStorageService.getUser().user._id;
  }

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  async onSubmit() {
    if (!this.files[0]) {
      this.snackbar.open('Meal picture is required', 'Close', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });
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

    const name = this.mealForm.value.name;
    const ingredients = this.mealForm.value.ingredients;
    const price = this.mealForm.value.price;
    const description = this.mealForm.value.description;
    const preparationTime = this.mealForm.value.preparationTime;

    this.cityService
      .createMeal(
        {
          name,
          ingredients,
          price,
          description,
          preparationTime,
          picture: this.url,
          ownerId: this.owenrId,
          cityId: this.cityId,
        },
        this.cityId
      )
      .subscribe({
        error: (e) => console.error(e),
        complete: () => this.router.navigate([`/cities/${this.cityId}/meals`]),
      });
  }
}
