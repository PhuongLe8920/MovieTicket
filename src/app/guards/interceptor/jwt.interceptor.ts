import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    /**Authorization */
    let authToken = '';
    if(localStorage.getItem('user')) {
      let user = JSON.parse(localStorage.getItem('user') as string);
      authToken =`Bearer ${user.accessToken}`;
    }
    const authReq = request.clone({
      headers: request.headers.set("Authorization", authToken)
    })
    return next.handle(authReq);
  }

}
