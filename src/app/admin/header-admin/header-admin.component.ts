import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {
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
  constructor(private route: ActivatedRoute) { }

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
