import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../auth/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
login:boolean=true;
logout:boolean=false;
  constructor(public loginservice:LoginService,public router:Router) { }


  ngOnInit(): void {
   if(this.loginservice.logeduserdetails!=null)
   {
     this.logout=true;
     this.login=false;
   }
  }
  LogOut(){
    this.loginservice.logeduserdetails=null;
    this.router.navigate(["/Auth/Login"])
  }
}
