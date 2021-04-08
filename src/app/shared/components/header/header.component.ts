import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;

  linksHome = [
    { title: 'TRANG CHỦ', fragment: '/' },
    { title: 'DANH SÁCH PHIM', fragment: '/list-movie-page' },
    { title: 'MUA VÉ', fragment: '/booking-page' },
    { title: 'LIÊN HỆ', fragment: '/about-page' },
    // {title: 'ĐĂNG KÝ', fragment: '/sign-up-page'}

  ];
  active = '1';

  /**Đăng ký/ Đăng nhập */
  isLogin = false;
  userLogin = {
    email: "",
    hoTen: "",
    maLoaiNguoiDung: "",
    maNhom: "",
    matKhau: "",
    soDt: "",
    taiKhoan: ""
  }
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    // check bất đồng bộ
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user') as string);
      if(user){
        this.isLogin = true;
        this.userLogin = user;
        console.log(this.isLogin, this.userLogin)
      }
      else {
        this.isLogin = false;
      }
    }
  }


  logOut() {
    if(localStorage.getItem('user')) {
      const acc = JSON.parse(localStorage.getItem('user') as string);
      console.log(acc);
      localStorage.removeItem('user');
      this.isLogin = false;
    }
  }

}
