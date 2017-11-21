import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthServiceGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const isLogged = localStorage.getItem('isLogged');
      if (state.url !== '/') {
        return (isLogged || isLogged === 'true') ? true : false;
      }
      return true;
  }
}
