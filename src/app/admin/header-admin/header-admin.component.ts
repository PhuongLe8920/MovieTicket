import {  AfterContentChecked,  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit, AfterContentChecked {
    isMenuCollapsed = true;
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
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user') as string);
      if(user){
        this.isLogin = true;
        this.userLogin = user;
        // console.log(this.isLogin, this.userLogin)
      }
      else {
        this.isLogin = false;
      }
    }
  }

  ngAfterContentChecked(): void {
    const item = localStorage.getItem('user');
    if (!this.isLogin && !!item) {
      const user = JSON.parse(String(localStorage.getItem('user')));
      if (user) {
        this.isLogin = true;
        this.userLogin = user;
        console.log(this.isLogin, this.userLogin)
      } else {
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
