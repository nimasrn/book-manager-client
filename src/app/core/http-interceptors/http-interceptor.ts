import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';
import { SwUpdate } from '@angular/service-worker';

/**
 * This interceptor use for user authentication and permissions.
 */
@Injectable()
export class HttpINterceptor implements HttpInterceptor {

  constructor(
    public userService: UserService,
    public router: Router,
    private swUpdate: SwUpdate,

  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let request;

    if (token) {
      request = req.clone({
        headers: new HttpHeaders({
          // 'Content-Type': 'application/json; charset=utf-8',
          'Authorization': "Bearer " + token,
          version: environment.version
        })
      });
    } else {
      request = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          version: environment.version
          // 'x-auth-token': token,
        })
      });
    }

    return next.handle(request).pipe(
      catchError((error, caught) => {
        if (error.status === 401) {
          localStorage.setItem('token', '');
          this.router.navigate(['/auth/otp']);
        }
        if (error.status === 412) {
          this.swUpdate.activateUpdate().then(() => {
            if (confirm('نسخه جدید اپلیکیشن منتشر شد. برای بروزرسانی کلیک کنید.')) {
              document.location.reload();

            }
          });
        }
        return throwError(error);
      }));
  }
}

