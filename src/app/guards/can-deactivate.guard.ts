import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from '../admin/add-user/add-user.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate (component: AddUserComponent) {
    const flag = component.checkDeactivate();
    return flag ? flag : window.confirm('Bạn có muốn rời khỏi trang không?');
  }

}
