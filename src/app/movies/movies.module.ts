import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { ShowMovieComponent } from './Components/show-movie/show-movie.component';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './Components/movies/movies.component';
import { DisplayShowComponent } from './Components/display-show/display-show.component';
import { ShowTheatreComponent } from './Components/show-theatre/show-theatre.component';
import { ShowSeatsComponent } from './Components/show-seats/show-seats.component';
import { AddMoviesComponent } from './Components/add-movies/add-movies.component';
import { AddTheatresComponent } from './Components/add-theatres/add-theatres.component';
import { AddShowsComponent } from './Components/add-shows/add-shows.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteMovieComponent } from './Components/delete-movie/delete-movie.component';
import { DeleteTheatreComponent } from './Components/delete-theatre/delete-theatre.component';
import { DeleteShowComponent } from './Components/delete-show/delete-show.component';



@NgModule({
  declarations: [
    MoviesListComponent,
    ShowMovieComponent,
    MoviesComponent,
    DisplayShowComponent,
    ShowTheatreComponent,
    ShowSeatsComponent,
    AddMoviesComponent,
    AddTheatresComponent,
    AddShowsComponent,
    DeleteMovieComponent,
    DeleteTheatreComponent,
    DeleteShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
