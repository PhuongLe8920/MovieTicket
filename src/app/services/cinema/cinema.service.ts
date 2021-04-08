import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private httpClient: HttpClient) { }

  getDSRap(): Observable<any> {
    const api = "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";
    return this.httpClient.get(api).pipe(tap())
  }

  getChiTietRap(id: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim='+ id;
    return this.httpClient.get(api).pipe(tap())
  }

}
