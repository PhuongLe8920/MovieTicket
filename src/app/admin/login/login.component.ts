import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private accService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn(form: any) {
    console.log(form)
    const objLogin = {
      taiKhoan: form.value.taiKhoan,
      matKhau: form.value.matKhau,
    }
    this.accService.logIn(objLogin).subscribe(data => {
      console.log(data)
      if(data) {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/admin/dash-board'])
      }
      else {
        alert("Đăng nhập thất bại!")
      }
    })
  }

}
