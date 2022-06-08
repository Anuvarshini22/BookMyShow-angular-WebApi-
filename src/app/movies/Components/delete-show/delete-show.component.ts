import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowService } from '../../service/show.service';

@Component({
  selector: 'app-delete-show',
  templateUrl: './delete-show.component.html'
})
export class DeleteShowComponent implements OnInit {

  constructor(public showService: ShowService, public route: Router) { }
  deleteDetails = new FormGroup({
    id: new FormControl('')
  })
  ngOnInit(): void {
  }
  DeleteShow() {
    let deleteId = parseInt(this.deleteDetails.value.id);
    this.showService.deleteShow(deleteId).subscribe(data => {
      console.log(data);
      if(data==true)
      {
        alert("show deleted successfully!!");
      }
      this.deleteDetails.reset();

    })
  }

}
