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
      // return this.authService.userIsAuthenticated.pipe(
      //   switchMap(isAuthenticated => {
      //     if (!isAuthenticated) {
      //       console.log('trying autologin');
      //       return this.authService.autoLogin();
      //     } else {
      //       return of(isAuthenticated);
      //     }
      //   }),
      //   tap(isAuthenticated => {
      //     console.log(isAuthenticated);
      //     if (!isAuthenticated) {
      //       this.router.navigateByUrl('/auth');
      //     }
      //   })
      // );
      this.authService.autoLogin2()
      if (this.authService.userAutenticado){
        return true;
      }else{
        this.router.navigateByUrl('/auth');
      }
  }
  
}
