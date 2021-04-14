import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  @Input() cinema: any
  constructor() { }

  ngOnInit(): void {
  }

}
