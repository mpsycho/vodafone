import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginChange = new Subject<boolean>();

  constructor(private router: Router) {}

  setLoginUser() {
    this.loginChange.next(true);
    this.router.navigate(['/home']);
  }
}
