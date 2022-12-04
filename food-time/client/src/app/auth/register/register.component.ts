import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth-form.component.scss'],
})
export class RegisterComponent implements OnInit {
  isLoading = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;
    const password = form.value.password;
    const repeatPassword = form.value.repeatPassword;

    console.log(form.value);

    form.reset();
  }
}
