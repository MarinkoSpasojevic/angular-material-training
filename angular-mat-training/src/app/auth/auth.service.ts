import { AuthData } from './../_interfaces/aut-data.model';
import { User } from './../_interfaces/user.model';
import { Injectable } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private user: User;

  public registerUser = (authData: AuthData) => {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.router.navigate(['/training'])
  }

  public login = (authData: AuthData) => {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.router.navigate(['/training'])
  }

  public logout = () => {
    this.user = null;
    this.router.navigate(['/login']);
  }

  public getUser = () => {
    return {...this.user}
  }

  public isAuth = () => {
    return this.user != null;
  }

}
