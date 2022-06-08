import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../service/show.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-show',
  templateUrl: './display-show.component.html'
})
export class DisplayShowComponent implements OnInit {

  theatreId: number = 0;
  shows: any;
  constructor(public showservice: ShowService, private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.theatreId = this.route.snapshot.params['id'];
    this.showservice.getShowById(this.theatreId).subscribe(response => {
      this.shows = response;
    })
  }

}
