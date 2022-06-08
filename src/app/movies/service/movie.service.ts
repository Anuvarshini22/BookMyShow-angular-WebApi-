import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = 'https://localhost:7201/api/Movie';
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + '/all');
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.baseUrl + '/' + id);
  }

  saveMovie(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteMovie(id: Number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
