import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theatre } from 'src/app/models/theatre.model';


@Injectable({
  providedIn: 'root'
})
export class TheatreService {
  baseUrl = 'https://localhost:7201/api/Theatres';
  constructor(private http: HttpClient) { }

  getTheatreById(id: number): Observable<Theatre> {
    return this.http.get<Theatre>(this.baseUrl + '/TheatreByMovie' + id);
  }

  saveTheatre(data: any) {
    return this.http.post(this.baseUrl, data);
  }
  deleteTheatre(id: Number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
