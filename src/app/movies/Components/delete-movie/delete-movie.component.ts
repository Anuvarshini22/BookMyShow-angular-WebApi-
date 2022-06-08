import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html'
})
export class DeleteMovieComponent implements OnInit {

  constructor(public movieService: MovieService, public route: Router) { }
  deleteDetails = new FormGroup({
    id: new FormControl('')
  })
  ngOnInit(): void {
  }
  DeleteMovie() {
    let deleteId = parseInt(this.deleteDetails.value.id);
    this.movieService.deleteMovie(deleteId).subscribe(data => {
      console.log(data);
      if(data==true)
      {
        alert("movie deleted successfully!!");
      }
      this.deleteDetails.reset();

    })
  }

}
