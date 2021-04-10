import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from 'src/app/services/cinema/cinema.service';

@Component({
  selector: 'app-list-seat',
  templateUrl: './list-seat.component.html',
  styleUrls: ['./list-seat.component.scss'],
})
export class ListSeatComponent implements OnInit {
  @Input() itemSeat: any;

  listSeat = [
    {
      daDat: false,
      giaVe: 75000,
      loaiGhe: "Thuong",
      maGhe: '',
      maRap: '',
      stt: '',
      taiKhoanNguoiDat: null,
      tenGhe: '',
     },
  ];
  maLichChieu = '';
  unavailableSeat = 0;
  availableSeat = 0;
  selectedSeat = 0;
  listSelectedSeat : any [] = [];
  priceArray: number [] = []

  constructor(private cinemaSV: CinemaService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.cinemaSV.layDSPhongVe(this.maLichChieu).subscribe(response => {
      this.listSeat = response.danhSachGhe;
      response.danhSachGhe.map((item: any) => {
        if(!item.daDat) {
          this.availableSeat++;
        }
        else {
          this.unavailableSeat++
        }
      })
      console.log(this.listSeat)
    })
  }

  _bookSeat(status: boolean, seat: any) {
    console.log(seat);
    if (status) {
      this.selectedSeat++;
      this.availableSeat--;
      this.listSelectedSeat.push(seat);
      this.priceArray.push(seat.giaVe);
      console.log(this.listSelectedSeat)
    } else {
      this.selectedSeat--;
      this.availableSeat++;
      for (let item of this.listSelectedSeat) {
        if (item.maGhe === seat.maGhe && !item.daDat) {
          this.listSelectedSeat.splice(item);
          this.priceArray.splice(seat.giaVe);
          console.log(this.listSelectedSeat)
        }
      }
    }
  }

  totalAmount () {
    const total = this.priceArray.reduce((total,n) => total + n )
    return total;
  }

  datVe() {
    console.log(this.listSelectedSeat)
  }
}
