import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthServiceGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (state.url !== '/') {
        const isLogged = localStorage.getItem('isLogged');

        if (isLogged || isLogged === 'true') {
          // this.router.navigate([state.url]);
          return true;
        } else {
          this.router.navigate(['/login']);
        }
        return false;
        // return (isLogged || isLogged === 'true') ? true : false;
      }
      return true;
  }
}
