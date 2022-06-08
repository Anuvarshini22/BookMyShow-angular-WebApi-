import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seat } from 'src/app/models/seat.model';


@Injectable({
  providedIn: 'root'
})
export class SeatService {

  baseUrl = 'https://localhost:7201/api/Seat';
  constructor(private http: HttpClient) { }

  seats: Seat[] = [];
  getSeatsById(id: number): Observable<Seat> {
    return this.http.get<Seat>(this.baseUrl + '/SeatByShow' + id);
  }
  updateSeats(id: number, n: number) {
    this.http.get('https://localhost:7201/api/Shows/Availabilty' + id + '/' + n).subscribe((data: any) => {
      return 1; //dont subscribe here and remove this return thing
    })
  }
}
