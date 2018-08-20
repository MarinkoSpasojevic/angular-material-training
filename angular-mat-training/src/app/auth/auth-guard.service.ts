import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  public canActivate = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    if(this.authService.isAuth()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
