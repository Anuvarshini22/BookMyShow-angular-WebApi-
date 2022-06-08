import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from 'src/app/models/registerUser.model';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = 'https://localhost:7201/api/Auth/register';
  constructor(private http: HttpClient) { }

  RegisterUser(data: any) {
    return this.http.post(this.baseUrl, data);
  }
}
