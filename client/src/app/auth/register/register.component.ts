import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth.service';
import { UploadService } from 'src/app/core/services/upload.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../assets/scss/form.scss'],
})
export class RegisterComponent implements OnInit {
  url: any;
  files: File[] = [];
  isLoading = false;

  registerForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.email,
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    repeatPassword: new FormControl(null, [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private uploadService: UploadService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  async onSubmit() {
    if (!this.files[0]) {
      this.snackbar.open('Profile picture is required', 'Close', {
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

    const name = `${this.registerForm.value.firstName}`;
    const email = `${this.registerForm.value.email}`;
    const password = `${this.registerForm.value.password}`;
    const repeatPassword = `${this.registerForm.value.repeatPassword}`;

    this.authService
      .register(name, email, password, repeatPassword, this.url)
      .subscribe({
        error: (e) => console.error(e),
        complete: () => this.router.navigate(['/cities']),
      });
  }
}
