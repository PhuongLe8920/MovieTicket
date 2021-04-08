import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-item-seat',
  templateUrl: './item-seat.component.html',
  styleUrls: ['./item-seat.component.scss']
})
export class ItemSeatComponent implements OnInit {

  @Input() seat: any;
  @Output() emitStatus = new EventEmitter();

  status =  false;

  constructor() { }

  ngOnInit(): void {
  }

  bookSeat(){
    this.status = !this.status;
    this.emitStatus.emit(this.status);
  }

}
