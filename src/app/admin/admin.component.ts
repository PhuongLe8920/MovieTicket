import { Component, OnInit, AfterContentChecked} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterContentChecked {

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

  }

  ngAfterContentChecked(): void {
    const item = localStorage.getItem('user');
    if (!this.isLogin && !!item) {
      const user = JSON.parse(String(localStorage.getItem('user')));
      if (user.maLoaiNguoiDung === "QuanTri") {
        this.isLogin = true;
        this.userLogin = user;
        this.router.navigate(['admin/movie-management']);
      } else {
        this.isLogin = false;
        alert('Không đủ quyền truy cập!')
        this.router.navigate(['/']);
      }
    }
  }
}
