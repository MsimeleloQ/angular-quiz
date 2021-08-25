import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthoGuardService implements CanActivate {
  
  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn()) {
      return true;
    }
    return false;
  }

  // canActivate(): boolean {
  //   if (this.isLoggedIn()) {
  //     return true;
  //   }
  //   return false;
  // }

  isLoggedIn(): boolean {
    if (localStorage.getItem('isLoggedIn') == "true") {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    // localStorage.clear();
  }
}
