import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html'
})
export class AddMoviesComponent implements OnInit {

  constructor(public movieService: MovieService, public route: Router) { }
  movieDetails = new FormGroup({
    title: new FormControl(''),
    language: new FormControl(''),
    genre: new FormControl(''),
    imageUrl: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    createdDate: new FormControl(''),
    updatedDate: new FormControl(''),
    deletedDate: new FormControl('')
  })
  ngOnInit(): void {
  }
  AddMovie() {
    this.movieService.saveMovie(this.movieDetails.value).subscribe(data => {
      console.log(data);
      if(data==true)
      {
        alert("movie added successfully!!");
      }
      this.movieDetails.reset();

    })
  }

}
