import { Component, OnInit } from '@angular/core';
import { TheatreService } from '../../service/theatre.service';
import { SeatService } from '../../service/seat.service';
import { ShowService } from '../../service/show.service';
import { MovieService } from '../../service/movie.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-show-seats',
  templateUrl: './show-seats.component.html'
})
export class ShowSeatsComponent implements OnInit {
  id: number = 0;
  Seats: any;
  theatre: any;
  shows: any;
  movies: any;
  userName: string = "";
  n: number = 0;
  startSeat: number = 0;
  seats: number = 0;
  ticket: any;
  createdDate: string = "25/05/2022";
  updateDate: string = "";
  deletedDate: string = "";
  isDeleted: boolean = false;
  showId: number = 1;
  constructor(public theatreservice: TheatreService, public seatservice: SeatService, public showservice: ShowService, public movieservice: MovieService, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.seatservice.getSeatsById(this.id).subscribe(response => {
      this.Seats = response;
    });
    this.showservice.getShowById(this.id).subscribe(response => {
      this.shows = response
    });
    this.movieservice.getMovieById(this.id).subscribe(response => {
      this.movies = response
    });
    this.theatreservice.getTheatreById(this.id).subscribe(response => {
      this.theatre = response;
    })
    //this.showId=this.shows.id;
    //this.theatreId=this.theatreservice.lists.id;
  }

  book() {
    this.userName = ((document.getElementById("username") as HTMLInputElement).value);
    this.n = parseInt((document.getElementById("seats") as HTMLInputElement).value);
    this.seatservice.updateSeats(this.id, this.n);
    this.showservice.getShowById(this.id);
    this.startSeat = this.shows.seatsAvailable;
    this.seats = this.startSeat - this.n;
    this.ticket = new Ticket(this.userName, this.n, this.showId, this.showId, this.showId, this.createdDate, this.updateDate, this.deletedDate, this.isDeleted);
    this.http.post('https://localhost:7201/api/Ticket', this.ticket).subscribe(result => {
      console.log(result);
    })
  }

}
