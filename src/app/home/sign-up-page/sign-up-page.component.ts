import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  @ViewChild('formDKy') formDK!: NgForm;
  listUser: any[] = [];
  constructor(private accService: AccountService, private router: Router) { }

  ngOnInit(): void {

  }

  dangKy(form: any) {
    console.log(form)
    const objUser = {
      taiKhoan: form.value.taiKhoan,
      matKhau: form.value.matKhau,
      hoTen: form.value.hoTen,
      email: form.value.email,
      soDt: form.value.sdt,
      maLoaiNguoiDung: 'KhachHang',
      maNhom: 'GP10',
    }
    this.listUser.push(objUser);
    console.log(this.listUser)
    this.formDK.reset();
    this.accService.dangKy(objUser).subscribe(data => {
      console.log(data);
      if(data) {
        localStorage.setItem('user', JSON.stringify(data));
        alert('Đăng ký thành công!')
        this.router.navigate(['/'])
      }
      else {
        alert('Đăng ký thất bại!')
      }
    })
  }

  checkDeactivate() {
    return this.formDK.submitted;
  }

}
