import { Component, OnInit } from '@angular/core';
import { Theatre } from 'src/app/models/theatre.model';
import { HttpClient } from '@angular/common/http';
import { TheatreService } from '../../service/theatre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-theatre',
  templateUrl: './show-theatre.component.html'
})
export class ShowTheatreComponent implements OnInit {

  movieId: number = 0;
  theatres: Theatre[] = [];
  theatre: any;
  constructor(public theatreservice: TheatreService, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];
    this.theatreservice.getTheatreById(this.movieId).subscribe(response => {
      this.theatre = response;
    })
  }

}
