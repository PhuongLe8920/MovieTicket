import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent implements OnInit {

  constructor(private accSV: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn(form: any) {
    const accLogin = {
      taiKhoan: form.value.taiKhoan,
      matKhau: form.value.matKhau,
    }
    this.accSV.logIn(accLogin).subscribe(data => {
      console.log(data);
      if(data) {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/'])
        // window.location.assign('/')
      }
      else {
        alert("Tài khoản hoặc mật khẩu không đúng!")
      }
    })
  }

}
