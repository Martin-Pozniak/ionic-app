import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _userAuthenticated = false;

  constructor(
    private router: Router
  ) { }

  get userIsAuthenticated() {
    return this._userAuthenticated;
  }

  login() {
    this._userAuthenticated = true;
  }
  logout() {
    this._userAuthenticated = false;
    this.router.navigateByUrl('/auth');
  }
  
}
