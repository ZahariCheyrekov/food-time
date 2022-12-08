import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../assets/scss/form.scss'],
})
export class RegisterComponent implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const name = `${form.value.firstName} ${form.value.lastName}`;
    const email = form.value.email;
    const password = form.value.password;
    const repeatPassword = form.value.repeatPassword;

    console.log(form.value);

    this.authService
      .register(name, email, password, repeatPassword)
      .subscribe((res) => console.log(res));

    form.reset();
  }
}
