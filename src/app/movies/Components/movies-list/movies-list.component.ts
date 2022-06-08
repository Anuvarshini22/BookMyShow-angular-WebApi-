import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];
  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(response => {
      this.movies = response
    });

  }
}
