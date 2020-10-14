import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuth = false;
  loginSubscription: Subscription;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginSubscription = this.loginService.loginChange.subscribe(
      (loginStatus) => {
        this.isAuth = loginStatus;
      }
    );
  }
}
