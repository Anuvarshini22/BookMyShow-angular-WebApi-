import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/service/login.service';

@Component({
  selector: 'app-caurosel',
  templateUrl: './caurosel.component.html'
})
export class CauroselComponent implements OnInit {

  constructor(public loginservice: LoginService) { }
  adminView: boolean = false;

  ngOnInit(): void {
    this.adminView = this.loginservice.logincheck;
  }

}
