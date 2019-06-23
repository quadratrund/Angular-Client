import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.setAuthHeaders(request);
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401) {
                    let newJwt: string = null;
                    this.authService.refresh().subscribe(
                        data => {
                            newJwt = data.token;
                            this.authService.setCookie('es_cli_jwt', data.token);
                        },
                        error => console.error('error refreshing token', error)
                    );

                    const newRequest = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${newJwt}`
                        }
                    });

                    return next.handle(newRequest);
                } else {
                    console.error('Another http error occurred');
                }
            })
            // catchError((err: HttpErrorResponse) => {
            //     if (err.status === 401) {
            //         let newRequest: HttpRequest<any> = null;
            //         this.authService.refresh().subscribe(
            //             data => {
            //                 newRequest = request.clone({
            //                     setHeaders: {
            //                         Authorization: `Bearer ${data.token}`
            //                     }
            //                 });
            //             },
            //             error => console.error(error)
            //         );
            //     }
            // })
            //

                // console.error('Uncaught error occured here somewhere', err);
            // })
        );
    }

    private setAuthHeaders(request: HttpRequest<any>) {
        if (request.url.replace('//', '/').split('/')[2] !== '/login') {
            console.log('retrieving cookies');
            const authCookie = this.authService.getCookie('es_cli_jwt');
            const refreshCookie = this.authService.getCookie('es_cli_ref');

            console.log(authCookie, refreshCookie);
            if (authCookie && refreshCookie) {
                console.log('setting headers');
                request.headers.append('Authorization', 'Bearer ' + authCookie);
                request.headers.append('X-Refresh-Token', refreshCookie);

                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${authCookie}`,
                        'X-Refresh-Token': refreshCookie
                    }
                });
            }

            return request;
        }
    }


}
