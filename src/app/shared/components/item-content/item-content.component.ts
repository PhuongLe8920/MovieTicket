import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss']
})
export class ItemContentComponent implements OnInit {
  @Input() itemContent:any;

  constructor() { }

  ngOnInit(): void {
  }

}
