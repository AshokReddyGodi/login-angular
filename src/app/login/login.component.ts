import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  userNameErr = '';
  passErr = '';
  constructor() { }

  ngOnInit() {

    function myFunction() {
      document.getElementById("myDiv").style.borderColor = "red";
    }
  }
  validation() {
    console.log(this.email, this.password);
    if (this.email === '') {
      this.userNameErr = 'This field is required';
    } else {
      this.userNameErr = '';
    }
    if (this.password === '') {
      this.passErr = 'This field is required';
    } else {
      this.passErr = '';
    }
  }
}
