import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-time-by-cinema',
  templateUrl: './show-time-by-cinema.component.html',
  styleUrls: ['./show-time-by-cinema.component.scss']
})
export class ShowTimeByCinemaComponent implements OnInit {
  @Input() showtime: any;
  constructor() { }

  ngOnInit(): void {
  }

}
