import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.isAuthenticated()) {
      const cloneReq = request.clone({
        headers: new HttpHeaders().set(
          'Authorization',
          localStorage.getItem('token')
        ),
      });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}

export const AUTH_INTERCEPTOR_PROVIDER = {
  useClass: AuthInterceptor,
  provide: HTTP_INTERCEPTORS,
  multi: true
};
