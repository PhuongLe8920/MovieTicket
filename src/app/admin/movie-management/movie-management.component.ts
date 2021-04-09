import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movie-management',
  templateUrl: './movie-management.component.html',
  styleUrls: ['./movie-management.component.scss']
})
export class MovieManagementComponent implements OnInit {
  @ViewChild('addMovieForm') addMovieForm!: NgForm;

  listMovie: any [] = [];
  isUpdating = false;

  constructor(private movieSV: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.getListMovie();
  }

  getListMovie() {
    this.movieSV.getListMovieComing().subscribe((result: any) => {
      console.log(result)
      this.listMovie = result;
    })
  }

  addMovie (form: any) {
    const objMovie = {
      maPhim: form.value.maPhim,
      tenPhim: form.value.tenPhim,
      biDanh: form.value.biDanh,
      trailer: form.value.trailer,
      hinhAnh: form.value.hinhAnh,
      moTa: form.value.moTa,
      maNhom: form.value.maNhom,
      ngayKhoiChieu: form.value.ngayKhoiChieu,
      danhGia: form.value.danhGia,
    }
    this.movieSV.addMovie(objMovie).subscribe(data => {
      console.log(data);
      if(data) {
        this.listMovie.push(objMovie);
        localStorage.setItem('movie', JSON.stringify(data));
        this.router.navigate(['/admin/movie-management'])
      }
      else {
        alert('Thêm phim thất bại!')
      }
    })
    this.addMovieForm.reset();
  }

  updateMovie(movie:any) {

  }

  checkDeactivate() {
    return this.addMovieForm.submitted;
  }

  /**check error 500 */
  deleteMovie(maPhim: any) {
    console.log(maPhim)
    this.movieSV.deleteMovie(maPhim).subscribe(response => {
      this.listMovie = [...this.listMovie.splice(maPhim)];
      return this.listMovie;
    })
  }

  updateForm(movie: any){
    console.log(movie);
    this.isUpdating = true;
    let tenPhim = movie.tenPhim;
    let biDanh = movie.biDanh;
    let trailer = movie.trailer;
    let hinhAnh = movie.hinhAnh;
    let moTa = movie.moTa;
    let maNhom = movie.maNhom;
    let ngayKhoiChieu = movie.ngayKhoiChieu;
    let danhGia = movie.danhGia;
    let maPhim = movie.maPhim;
    this.addMovieForm.setValue({
      maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia
    })
  }

}
