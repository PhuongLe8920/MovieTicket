import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-list-phim-dang-chieu',
  templateUrl: './list-phim-dang-chieu.component.html',
  styleUrls: ['./list-phim-dang-chieu.component.scss'],
})
export class ListPhimDangChieuComponent implements OnInit {
  customOptions: any;

  listMovieNow!: any[];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.customOptions = this.movieService.customOptions;
    this.movieService.getListMovieNow().subscribe((phim) => {
      this.listMovieNow = phim;
      console.log(this.listMovieNow);
    });

  }
}
