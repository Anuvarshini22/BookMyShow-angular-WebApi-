import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/auth/service/register.service';
import { RegisterUser } from 'src/app/models/registerUser.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
 
})
export class RegisterComponent implements OnInit {

  constructor(public registerservice:RegisterService) { }
  registerDetails=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  ngOnInit(): void {
  }
  register()
{
  this.registerservice.RegisterUser(this.registerDetails.value).subscribe(res=>{
    console.log(res);
  })
}

}
