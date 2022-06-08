import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CauroselComponent } from './home/Components/caurosel/caurosel.component';
import { DisplayShowComponent } from './movies/Components/display-show/display-show.component';
import { MoviesListComponent } from './movies/Components/movies-list/movies-list.component';
import { MoviesComponent } from './movies/Components/movies/movies.component';
import { ShowMovieComponent } from './movies/Components/show-movie/show-movie.component';
import { ShowTheatreComponent } from './movies/Components/show-theatre/show-theatre.component';
import { ShowSeatsComponent } from './movies/Components/show-seats/show-seats.component';
import { AuthComponent } from './auth/Components/auth/auth.component';
import { LoginComponent } from './auth/Components/login/login.component';
import { RegisterComponent } from './auth/Components/register/register.component';
import { AddMoviesComponent } from './movies/Components/add-movies/add-movies.component';
import { AddTheatresComponent } from './movies/Components/add-theatres/add-theatres.component';
import { DeleteMovieComponent } from './movies/Components/delete-movie/delete-movie.component';
import { DeleteShowComponent } from './movies/Components/delete-show/delete-show.component';
import { DeleteTheatreComponent } from './movies/Components/delete-theatre/delete-theatre.component';

const routes: Routes = [
  { path: '', component: CauroselComponent },

  {
    path: 'Movies', component: MoviesComponent, children: [
      { path: 'AddMovies', component: AddMoviesComponent },
      { path: 'AddTheatres', component: AddTheatresComponent },
      { path: 'DeleteMovie', component: DeleteMovieComponent },
      { path: 'MovieList', component: MoviesListComponent },
      { path: 'ShowMovie/:id', component: ShowMovieComponent },
      { path: 'ShowTheatre/:id', component: ShowTheatreComponent },
      { path: 'Show/:id', component: DisplayShowComponent },
      { path: 'ShowSeat/:id', component: ShowSeatsComponent },
      { path: 'DeleteTheatre', component: DeleteTheatreComponent },
      { path: 'DeleteShow', component: DeleteShowComponent }
    ]
  },

  {
    path: 'auth', component: AuthComponent, children: [
      { path: 'Login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
