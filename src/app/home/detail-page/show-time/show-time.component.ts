import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from 'src/app/services/cinema/cinema.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit {
  listCinema: any;
  maPhim = '';
  thongTinRap: any;
  chiTietPhim: any;
  logo: any;
  dkSwitch = '';

  constructor(
    private cinemaSV: CinemaService,
    private activatedRoute:ActivatedRoute,
    private movieService: MoviesService,
    private loaderSV: LoaderService) { }

  ngOnInit(): void {
    this.cinemaSV.getDSRap().subscribe((_cinema) => {
      this.listCinema = _cinema;
      console.log(this.listCinema)
    })

    this.maPhim = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.movieService.getDetailMovie(this.maPhim).subscribe(response =>{
      this.chiTietPhim = response.lichChieu.map((item: any)=>{
      return item;
    })
      console.log(this.chiTietPhim);
      this.thongTinRap = response.lichChieu.map((_item:any)=>{
        return _item.thongTinRap;
      })
      this.logo = this.thongTinRap.logo;
      console.log(this.thongTinRap);
    })
}

  changeValue(tenHeThongRap: string) {
    this.dkSwitch = tenHeThongRap;
    console.log(this.dkSwitch)
  }

}
