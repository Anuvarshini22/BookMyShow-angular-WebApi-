import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/show.model';


@Injectable({
  providedIn: 'root'
})
export class ShowService {
  baseUrl = 'https://localhost:7201/api/Shows';
  constructor(private http: HttpClient) { }

  getShowById(id: number): Observable<Show> {
    return this.http.get<Show>(this.baseUrl + '/showByTheatre' + id);
  }

  saveShow(data: any) {
    return this.http.post(this.baseUrl, data);
  }
  deleteShow(id: Number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
