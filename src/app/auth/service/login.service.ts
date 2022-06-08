import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from 'src/app/models/loginUser.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logincheck: boolean = false;
  baseUrl = 'https://localhost:7201/api/Auth/login';
  constructor(private http: HttpClient) { }
  public logeduserdetails: any = null;

  LoginUser(data: any) {
    return this.http.post(this.baseUrl + 'Customer', data);
  }
  LoginAdmin(data: any) {
    this.http.post('https://localhost:7201/api/Auth/loginAdmin', data).subscribe(data => {
      if (data == false) {
        this.logincheck = false;
      }
      this.logincheck = true;
    })
    return this.http.post('https://localhost:7201/api/Auth/loginAdmin', data);
  }
}
