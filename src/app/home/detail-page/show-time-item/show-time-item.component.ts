import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-time-item',
  templateUrl: './show-time-item.component.html',
  styleUrls: ['./show-time-item.component.scss']
})
export class ShowTimeItemComponent implements OnInit {
  @Input() showtime: any;
  constructor() { }

  ngOnInit(): void {
  }

}
