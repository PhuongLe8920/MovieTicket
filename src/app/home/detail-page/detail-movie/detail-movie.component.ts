import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  @Input() detail: any;

  constructor() { }

  ngOnInit(): void {
  }

  showTrailer(link: any) {
    this.detail.trailer = link;
    console.log(this.detail.trailer)
  }

}
