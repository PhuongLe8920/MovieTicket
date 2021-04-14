import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private httpClient: HttpClient) { }

  getDSRap(): Observable<any> {
    const api = "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";
    return this.httpClient.get(api).pipe(tap())
  }

  getDSCumRap (maRap: string): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=' + maRap;
    return this.httpClient.get(api).pipe(tap())
  }

  getChiTietRap(id: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim='+ id;
    return this.httpClient.get(api).pipe(tap())
  }

  layLichChieuRap (maRap: string, GP: string): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap='+ maRap+'&maNhom=GP01';
    return this.httpClient.get(api).pipe(tap())
  }

  layDSPhongVe (id: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=' + id;
    return this.httpClient.get(api).pipe(tap())
  }

  datVe (obj: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe';
    return this.httpClient.post(api, obj).pipe(tap(),
      catchError(err => {
        return this.handleErr(err);
      })
    )
  }

  handleErr(err: any) {
    switch(err.status) {
      case 500:
        alert(err.error);
        break;
      case 401:
        alert("Vui lòng đăng nhập!");
        break;
      default:
        break;
    }
    return throwError(err);
  }
}

