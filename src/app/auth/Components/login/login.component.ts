import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/models/loginUser.model';
import { LoginService } from 'src/app/auth/service/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(public loginservice: LoginService, public route: Router) { }
  loginDetails = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(): void {
  }
  Login() {
    this.loginservice.LoginUser(this.loginDetails.value).subscribe(data => {
      console.log(data);
      this.loginDetails.reset();
      if (data == false) {
        alert("invalid credentials");
        return;
      }
      this.loginservice.logeduserdetails=data;
        this.route.navigate(["/"]);
    })
  }
  AdminLogin() {
    this.loginservice.LoginAdmin(this.loginDetails.value).subscribe(data => {
      console.log(data);
      //  this.resetForm(form);
      if (data == false) {
        alert("invalid credentials");
        return;
      }
      this.loginservice.logeduserdetails=data;
      this.route.navigate(["/"]);
    })
  }
  


}
