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
  listSelectedSeat: any [] = []
  priceArray: number [] = []
  thongTinPhim = {
    tenPhim:'',
    tenCumRap: '',
    diaChi: '',
    gioChieu: '',
    hinhAnh: '',
  }
  danhSachVe : any [] = [];


  constructor(private cinemaSV: CinemaService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.cinemaSV.layDSPhongVe(this.maLichChieu).subscribe(response => {
      console.log(response)
      this.thongTinPhim = response.thongTinPhim;
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
    console.log(status, seat);
    if (status) {
      this.selectedSeat++;
      this.availableSeat--;
      this.listSelectedSeat.push(seat);
      this.priceArray.push(seat.giaVe);
      console.log(this.listSelectedSeat)
    }
    else {
      this.selectedSeat--;
      this.availableSeat++;
      for(let index in this.listSelectedSeat) {
        if(this.listSelectedSeat[index].maGhe === seat.maGhe) {
          this.listSelectedSeat.splice(parseInt(index),1)
          this.priceArray.splice(parseInt(index),1)
        }
      }
      console.log(this.listSelectedSeat)
      console.log(this.priceArray)
    }
  }

  totalAmount () {
    const total = this.priceArray.reduce((total,n) => total + n )
    return total;
  }

  datVe() {
    const acc = JSON.parse(localStorage.getItem("user") as string);
    const objVe = {
      maGhe: '',
      giaVe: ''
    }
    this.listSelectedSeat.map((item: any) => {
      objVe.maGhe = item.maGhe;
      objVe.giaVe = item.giaVe;
       return this.danhSachVe.push(objVe)
    })
    const objDatVe = {
      maLichChieu: this.maLichChieu,
      danhSachVe: this.danhSachVe,
      taiKhoanNguoiDung: acc.taiKhoan,
    }
    console.log(objDatVe)

    // fix alert?
    this.cinemaSV.datVe(objDatVe).subscribe(data => {
      if(data) {
        alert ("Đặt vé thành công!")
      }
    })

    this.listSelectedSeat.map((item: any) => {
      item.daDat = true;
      return this.listSelectedSeat;
    })
  }


}
