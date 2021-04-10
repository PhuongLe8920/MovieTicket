import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: false,
  };

  getListMovieNow(): Observable<any> {
    const api =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07';
    return this.httpClient.get(api).pipe(tap());
  }

  getListMovieComing(): Observable<any> {
    const api =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05';
    return this.httpClient.get(api).pipe(tap());
  }

  getDetailMovie(id: string): Observable<any> {
    const api =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=' +
      id;
    return this.httpClient.get(api).pipe(tap());
  }

  addMovie(movie: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim';
    return this.httpClient.post(api, movie).pipe(tap(),
    catchError(err => {
      return this.handleErr(err);
    }))
  }

  // fix lỗi upload
  uploadImg (): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh';
    var frm = new FormData();
    frm.append('file','assets/img/1990.jpg');
    frm.append('tenPhim','1990')
    frm.append('manhom','GP05')
    return this.httpClient.post(api, frm).pipe(tap(),
    catchError(err => {
      return this.handleErr(err);
    }))
  }

  deleteMovie (maPhim: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim';
    return this.httpClient.delete(api,maPhim).pipe(tap(),
    catchError(err => {
      return this.handleErr(err);
    }))
  }

  handleErr(err: any) {
    switch(err.status) {
      case 500:
        alert(err.error);
        break;
      case 401:
        alert("Vui lòng đăng nhập tài khoản Admin!");
        break;
      default:
        break;
    }
    return throwError(err);
  }
}
