import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if(localStorage.getItem("user")) {
      return true;
    }
    alert('Vui lòng đăng nhập!')
    this.router.navigate(['log-in']);
    return false;
  }


}
