import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TheatreService } from '../../service/theatre.service';

@Component({
  selector: 'app-add-theatres',
  templateUrl: './add-theatres.component.html'
})
export class AddTheatresComponent implements OnInit {

  constructor(public theatreService: TheatreService, public route: Router) { }
  theatreDetails = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    createdDate: new FormControl(''),
    updatedDate: new FormControl(''),
    deletedDate: new FormControl('')
  })
  ngOnInit(): void {
  }
  AddTheatre() {
    this.theatreService.saveTheatre(this.theatreDetails.value).subscribe(data => {
      console.log(data);
      if(data==true)
      {
        alert("Theatre added successfully!!");
      }
      this.theatreDetails.reset();

    })
  }

}
