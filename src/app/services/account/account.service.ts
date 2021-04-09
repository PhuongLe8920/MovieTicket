import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  logIn(acc: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.httpClient.post(api, acc).pipe(tap(),
    catchError(err => {
      return this.handleErr(err);
    }))
  }

  signUp(user: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung';
    return this.httpClient.post(api, user).pipe(tap(),
    catchError(err => {
      return this.handleErr(err);
    }))
  }

  dangKy(user: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
    return this.httpClient.post(api, user).pipe(tap(),
    catchError(err => {
      return this.handleErr(err);
    }))
  }

  deleteUser(tk: string): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=' + tk;
    return this.httpClient.delete(api).pipe(tap(),
    catchError(err => {
      return this.handleErr(err);
    }))
  }

  updateUser(user: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung';
    return this.httpClient.put(api, user).pipe(tap(),
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

  getListUser(): Observable<any> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP10';
    return this.httpClient.get(url).pipe(tap())
  }
}
