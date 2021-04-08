import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  maPhim = '';
  detailMovie: any;
  bgImg: any;
  isLoaded = false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private movieService: MoviesService,
    private loaderSV: LoaderService) { }

  ngOnInit(): void {
    this.getDetailMovie();
  }

  getDetailMovie(){
    this.loaderSV.show();
    this.maPhim = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.movieService.getDetailMovie(this.maPhim).subscribe(response =>{
      console.log(response)
      this.loaderSV.hide();
      this.isLoaded = true;
      this.detailMovie = response
      this.bgImg = response.hinhAnh;
      console.log(this.bgImg);
   })
  }

}
