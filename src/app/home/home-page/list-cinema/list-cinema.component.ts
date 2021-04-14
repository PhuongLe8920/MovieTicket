import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/services/cinema/cinema.service';

@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.scss']
})
export class ListCinemaComponent implements OnInit {
listRap: any []=[];
listCumRap: any []=[];
listPhimCumRap: any []=[];
listLichChieuRap: any []=[];
dsRap: any []=[];
maCumRap: string = '';
maRap: string = 'BHDStar';
  constructor(private cinemaSV: CinemaService) { }

  ngOnInit(): void {
    this.cinemaSV.getDSRap().subscribe(data => {
      this.listRap = data;
      this.listRap.map((item: any)=>{
        return this.maRap = item.maHeThongRap;
      })
      console.log(this.listRap)
    })

    this.changeDK('BHDStar');

  }

  changeDK (maHeThongRap: string) {
    this.maRap = maHeThongRap;
    this.cinemaSV.getDSCumRap(this.maRap).subscribe(data => {
      this.listCumRap = data;
      console.log(data)
      this.listCumRap.map((item:any)=>{
        return this.dsRap = item.danhSachRap;
      })
      console.log(this.dsRap);
      this.dsRap.map((item:any)=>{
        return this.maCumRap = item.maRap;
      })
      console.log(this.maCumRap)
    })

    this.cinemaSV.layLichChieuRap(this.maRap, 'GP10').subscribe(data => {
      console.log(data)
      data.map((item:any)=>{
        return this.listPhimCumRap = item.lstCumRap;
      })
      console.log(this.listPhimCumRap);
      this.listPhimCumRap.map((item:any)=>{
        return this.listLichChieuRap = item.danhSachPhim;
      })
      console.log(this.listLichChieuRap)
    })
  }

}
