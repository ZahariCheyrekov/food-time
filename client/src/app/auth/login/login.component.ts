import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../assets/scss/form.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {}

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (!this.loginForm.value.email) {
      this.snackbar.open('Email is required', 'Close', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });
      return;
    }

    if (!this.loginForm.value.password) {
      this.snackbar.open('Password is required', 'Close', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });
      return;
    }

    this.authService.login(email, password).subscribe({
      error: (error) => console.error(error),
      complete: () => this.router.navigate(['/cities']),
    });
  }
}
