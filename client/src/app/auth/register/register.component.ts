import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(
    private authService: AuthService,
    private uploadService: UploadService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
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

    const name = `${form.value.firstName} ${form.value.lastName}`;
    const email = form.value.email;
    const password = form.value.password;
    const repeatPassword = form.value.repeatPassword;

    this.authService
      .register(name, email, password, repeatPassword, this.url)
      .subscribe((res) => console.log(res));

    this.router.navigate(['/cities']);
  }
}
