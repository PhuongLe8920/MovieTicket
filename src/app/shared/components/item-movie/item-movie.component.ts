import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss']
})
export class ItemMovieComponent implements OnInit {

  @Input() itemMovie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
