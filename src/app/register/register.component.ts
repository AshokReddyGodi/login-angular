import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName = '';
  firstNameErr = '';
  lastName = '';
  lastNameErr = '';
  emailId  = '';
  emailIdErr = '';
  password = '';
  passwordErr = '';
  confirmPassword = '';
  confirmPasswordErr = '';
  constructor() { }

  ngOnInit() {
  }

  regValidation() {
    if (this.firstName === '') {
      this.firstNameErr = 'This field is required';
    } else {
      this.firstNameErr = '';
    }
    if (this.lastName === '') {
      this.lastNameErr = 'This field is required';
    } else {
      this.lastNameErr = '';
    }
    if (this.emailId === '') {
      this.emailIdErr = 'This field is required';
    } else {
      this.emailIdErr = '';
    }
    if (this.password === '') {
      this.passwordErr = 'This field is required';
    } else {
      this.passwordErr = '';
    }
    if (this.confirmPassword === '') {
      this.confirmPasswordErr = 'This field is required';
    } else {
      this.confirmPasswordErr = '';
    }
  }
}