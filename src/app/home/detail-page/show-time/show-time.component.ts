import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaService } from 'src/app/services/cinema/cinema.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss'],
})
export class ShowTimeComponent implements OnInit {
  listCinema: any;
  maPhim = '';
  thongTinRap: any;
  chiTietPhim: any;
  logo: any;
  dkSwitch = '';
  heThongRap: any[] = [];
  cumRapChieu: any[] = [];
  heThongRapChieu:any []=[]

  constructor(
    private cinemaSV: CinemaService,
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cinemaSV.getDSRap().subscribe((_cinema) => {
      this.listCinema = _cinema;
      // console.log(this.listCinema);
    });

    this.maPhim = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.movieService.getDetailMovie(this.maPhim).subscribe((response) => {
      this.chiTietPhim = response.lichChieu.map((item: any) => {
        return item;
      });
      // console.log(this.chiTietPhim);
      this.thongTinRap = response.lichChieu.map((_item: any) => {
        return _item.thongTinRap;
      });
      // console.log(this.thongTinRap);
      this.logo = this.thongTinRap.logo;
    });

    this.changeValue('CGV');
  }

  changeValue(maHeThongRap: string) {
    this.dkSwitch = maHeThongRap;
    // console.log(this.dkSwitch)
    this.changeShowTime();
  }

  changeShowTime() {
    this.cinemaSV.getChiTietRap(this.maPhim).subscribe((data) => {
      console.log(data);
      this.heThongRapChieu = data.heThongRapChieu;
      console.log(this.heThongRapChieu)
      this.heThongRapChieu.map((item: any) => {
        if (item.maHeThongRap === this.dkSwitch) {
          this.heThongRap.push(item);
          console.log(this.heThongRap);
          this.heThongRap.map((item: any) => {
            this.cumRapChieu = item.cumRapChieu;
          });
          console.log(this.cumRapChieu);
        }
      });
    });
    this.heThongRap.splice(0,this.heThongRap.length);
    this.cumRapChieu.splice(0,this.cumRapChieu.length);
  }
}
