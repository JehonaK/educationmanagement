import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    if(localStorage.getItem("token")) {
      const authToken = localStorage.getItem("token");
      const headers = new HttpHeaders();
      headers.set("Authorization", authToken);
      authReq = req.clone({
        headers: req.headers.set("Authorization", authToken)
      });
    }
    return next.handle(authReq);
  }
  
}