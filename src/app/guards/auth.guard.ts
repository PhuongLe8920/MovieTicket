import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(localStorage.getItem("user")) {
      const acc = JSON.parse(localStorage.getItem("user") as string);
      if(acc.maLoaiNguoiDung === "QuanTri") {
        return true;
      }
      alert ('Không đủ quyền truy cập!')
      this.router.navigate(['/']);
      return false;
    }
    alert ('Vui lòng đăng nhập!')
    this.router.navigate(['/admin']);
    return false;
  }

}
