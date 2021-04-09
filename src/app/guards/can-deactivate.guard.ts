import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserManagementComponent } from '../admin/user-management/user-management.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate (component: UserManagementComponent) {
    const flag = component.checkDeactivate();
    return flag ? flag : window.confirm('Bạn có muốn rời khỏi trang không?');
  }

}
