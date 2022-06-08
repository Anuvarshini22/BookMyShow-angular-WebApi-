import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TheatreService } from '../../service/theatre.service';

@Component({
  selector: 'app-delete-theatre',
  templateUrl: './delete-theatre.component.html'
})
export class DeleteTheatreComponent implements OnInit {

  constructor(public theatreService: TheatreService, public route: Router) { }
  deleteDetails = new FormGroup({
    id: new FormControl('')
  })
  ngOnInit(): void {
  }
  DeleteTheatre() {
    let deleteId = parseInt(this.deleteDetails.value.id);
    this.theatreService.deleteTheatre(deleteId).subscribe(data => {
      console.log(data);
      if(data==true)
      {
        alert("Theatre deleted successfully!!");
      }
      this.deleteDetails.reset();

    })
  }

}
