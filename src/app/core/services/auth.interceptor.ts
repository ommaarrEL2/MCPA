import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const APi_token = localStorage.getItem('Token');
    const reqCopy = req.clone({
      setHeaders: {
        Authorization: `Bearer ${APi_token}`,
      },
    });
    // this.loader.loader.next(true);

    return next.handle(reqCopy).pipe(
      finalize(() => {
        // this.loader.loader.next(false);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          if (error.statusText == 'Unauthorized') {
            localStorage.removeItem('isLoggedin');
            if (!localStorage.getItem('isLoggedin')) {
              this.router.navigate(['/auth/login']);
            }
          } else {
            this.router.navigate([
              `/error/${error.status}`,
              {
                type: error.error.type,
                title: error.error.tilte,
                desc: error.error.desc,
              },
            ]);
          }
          return throwError(error);
        } else {
          return throwError(error);
        }
      })
    );
  }
}

// {
//   const APi_token = localStorage.getItem('Token');
//   const reqCopy = request.clone({setHeaders:{
//     Authorization:`Bearer ${APi_token}`}
//   })
//   return next.handle(reqCopy);
// }
