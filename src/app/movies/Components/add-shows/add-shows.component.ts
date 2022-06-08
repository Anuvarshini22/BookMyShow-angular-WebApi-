import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowService } from '../../service/show.service';

@Component({
  selector: 'app-add-shows',
  templateUrl: './add-shows.component.html'
})
export class AddShowsComponent implements OnInit {

  constructor(public showService: ShowService, public route: Router) { }
  showDetails = new FormGroup({
    name: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
    theatreId: new FormControl(''),
    movieId: new FormControl(''),
    capacity: new FormControl(''),
    seatsAvailable: new FormControl(''),
    createdDate: new FormControl(''),
    updatedDate: new FormControl(''),
    deletedDate: new FormControl('')
  })
  ngOnInit(): void {
  }
  AddShow() {
    this.showService.saveShow(this.showDetails.value).subscribe(data => {
      console.log(data);
      if(data==true)
      {
        alert("show added successfully!!");
      }
      this.showDetails.reset();

    })
  }

}
