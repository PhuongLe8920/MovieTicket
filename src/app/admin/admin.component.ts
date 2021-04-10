import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }
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

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user') as string);
      console.log(user.maLoaiNguoiDung);
      if(user.maLoaiNguoiDung === "QuanTri"){
        this.router.navigate(['admin/dash-board']);
        this.isLogin = true;
      }
      else {
        alert('Không đủ quyền truy cập!')
        this.router.navigate(['/']);
        this.isLogin = false;
      }
    }
  }

}
