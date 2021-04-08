import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-seat',
  templateUrl: './list-seat.component.html',
  styleUrls: ['./list-seat.component.scss'],
})
export class ListSeatComponent implements OnInit {
  @Input() itemSeat: any;

  listSeat = [
    { id: '1', price: 100000, status: false },
    { id: '2', price: 100000, status: false },
    { id: '3', price: 100000, status: false },
    { id: '4', price: 100000, status: false },
    { id: '5', price: 100000, status: false },
    { id: '6', price: 100000, status: false },
    { id: '7', price: 100000, status: false },
    { id: '8', price: 100000, status: false },
    { id: '9', price: 100000, status: false },
    { id: '10', price: 100000, status: false },
    { id: '11', price: 100000, status: false },
    { id: '12', price: 100000, status: false },
    { id: '13', price: 100000, status: false },
    { id: '14', price: 100000, status: false },
    { id: '15', price: 100000, status: false },
    { id: '16', price: 100000, status: false },
    { id: '17', price: 100000, status: false },
    { id: '18', price: 100000, status: false },
    { id: '19', price: 100000, status: false },
    { id: '20', price: 100000, status: false },
    { id: '21', price: 100000, status: false },
    { id: '22', price: 100000, status: false },
    { id: '23', price: 100000, status: false },
    { id: '24', price: 100000, status: false },
    { id: '25', price: 100000, status: false },
    { id: '26', price: 100000, status: false },
    { id: '27', price: 100000, status: false },
    { id: '28', price: 100000, status: false },
    { id: '29', price: 100000, status: true },
    { id: '30', price: 100000, status: true },
    { id: '31', price: 100000, status: false },
    { id: '32', price: 100000, status: false },
    { id: '33', price: 100000, status: false },
    { id: '34', price: 100000, status: false },
    { id: '35', price: 100000, status: true },
    { id: '36', price: 100000, status: false },
    { id: '37', price: 100000, status: false },
    { id: '38', price: 100000, status: true },
    { id: '39', price: 100000, status: true },
    { id: '40', price: 100000, status: false },
    { id: '41', price: 100000, status: false },
    { id: '42', price: 100000, status: false },
    { id: '43', price: 100000, status: false },
    { id: '44', price: 100000, status: false },
    { id: '45', price: 100000, status: false },
    { id: '46', price: 100000, status: false },
    { id: '47', price: 100000, status: false },
    { id: '48', price: 100000, status: false },
    { id: '49', price: 100000, status: false },
    { id: '50', price: 100000, status: false },
    { id: '51', price: 100000, status: false },
    { id: '52', price: 100000, status: false },
    { id: '53', price: 100000, status: false },
    { id: '54', price: 100000, status: false },
    { id: '55', price: 100000, status: false },
    { id: '56', price: 100000, status: false },
    { id: '57', price: 100000, status: false },
    { id: '58', price: 100000, status: false },
    { id: '59', price: 100000, status: false },
    { id: '60', price: 100000, status: false },
    { id: '61', price: 100000, status: false },
    { id: '62', price: 100000, status: false },
    { id: '63', price: 100000, status: false },
  ];

  unavailableSeat = 0;
  availableSeat = 0;
  listSelectedSeat: any = [];

  constructor() {}

  ngOnInit(): void {
    for (let item of this.listSeat) {
      if (!item.status) {
        this.availableSeat++;
      }
    }
  }

  _bookSeat(status: boolean, _seat: any) {
    if (status) {
      this.unavailableSeat++;
      this.availableSeat--;
      this.listSelectedSeat.push(_seat);
    } else {
      this.unavailableSeat--;
      this.availableSeat++;
      for (let index in this.listSelectedSeat) {
        if (this.listSelectedSeat[index].id === _seat.id) {
          this.listSelectedSeat.splice(index, 1);
        }
      }
    }
  }
}
