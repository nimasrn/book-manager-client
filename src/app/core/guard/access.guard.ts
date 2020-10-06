import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class AccessGuard implements CanActivate {
  constructor(public router: Router, private userService: UserService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let roles = route.data.roles as Array<string>;
    if (roles.indexOf(this.userService.userData.value.role) >= 0) {
      return true;
    }
    return false;

  }
}
