import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RootService } from '../shared/root.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  genders = ['male', 'female'];

  constructor(
    private loginService: LoginService,
    private rootService: RootService
  ) {}

  ngOnInit(): void {
    this.rootService.fetchUsers().subscribe();
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
    });

    this.signupForm.statusChanges.subscribe((status) => console.log(status));
  }

  onSubmit() {
    this.loginService.setLoginUser();
    this.signupForm.reset();
  }
}
