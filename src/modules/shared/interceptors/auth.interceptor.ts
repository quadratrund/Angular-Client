import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private request: HttpRequest<any>;

    constructor(
        private authService: AuthService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.setAuthHeaders(request);

        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401 && !request.url.includes('refresh')) {
                    return this.authService.refresh().pipe(
                        switchMap((data) => {
                            this.authService.setAccessToken(data.data.token);

                            if (this.authService.getAccessToken()) {
                              request = request.clone({setHeaders: {Authorization: `Bearer ${this.authService.getAccessToken()}`}});
                            }

                            return next.handle(request);
                        })
                    );
                }

                return throwError(err.error.message || err.statusText);
            })
        );
    }

    private setAuthHeaders(request: HttpRequest<any>) {
      const applyHeaders = !request.url.includes('auth');

      if (!applyHeaders) {
            console.log('Request to ' + request.url + ' does not require auth');
            return request;
        }

      const accessToken = this.authService.getAccessToken();
      const refreshToken = this.authService.getRefreshToken();

      if (accessToken && refreshToken) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
      }

      return request;
    }
}
