import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { CityService } from '../../core/services/city.service';
import { UploadService } from '../../core/services/upload.service';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.scss'],
})
export class CityCreateComponent {
  files: File[] = [];
  url: any;

  cityForm: FormGroup = new FormGroup({
    city: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    country: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  constructor(
    private uploadService: UploadService,
    private cityService: CityService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  async onSubmit() {
    if (!this.files[0]) {
      this.snackbar.open('City picture is required', 'Close', {
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

    const city = this.cityForm.value.city;
    const country = this.cityForm.value.country;

    this.cityService
      .createCity({ city, country, picture: this.url })
      .subscribe({
        error: (e) => console.error(e),
        complete: () => this.router.navigate(['/cities']),
      });
  }
}
