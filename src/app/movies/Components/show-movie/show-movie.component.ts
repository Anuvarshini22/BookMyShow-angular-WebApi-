import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html'
})
export class ShowMovieComponent implements OnInit {
  movie: any;
  id: number = 0;
  constructor(public movieService: MovieService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMovieById(this.id).subscribe(response => {
      this.movie = response;
    });

  }


}
