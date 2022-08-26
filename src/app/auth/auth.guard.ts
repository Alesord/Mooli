import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canLoad(
    route: Route, 
    segments: UrlSegment[]
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.userIsAuthenticated.pipe(
        switchMap(isAuthenticated => {
          console.log('Entrando en auth guard')
          if (!isAuthenticated) {
            console.log('Trying autologin')
            console.log(this.authService.autoLogin2())
            return this.authService.autoLogin2().then(data => {
              console.log('la data es: ' +  data)
              return data
            })
          } else {
            console.log(of(isAuthenticated))
            return of(isAuthenticated);
          }
        }),
        tap(isAuthenticated => {
          console.log(isAuthenticated)
          if (!isAuthenticated) {
            this.router.navigateByUrl('/auth')
          }
        })
      )
  }
  
}
