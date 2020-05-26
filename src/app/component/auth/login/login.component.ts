import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  onLoginFormSubmit() {
    // if (this.loginForm.valid) {
    const payload = {
      email: 'jehonaakonushefci@gmail.com',
      password: 'rinori123',
    };
    this.userService.login(payload.email, payload.password).subscribe(res => {
        console.log('');
      },
      (err) => {
        console.error(err);
      });
  }

  onRegisterFormSubmit() {
    // if (this.loginForm.valid) {
    const payload = {
      email: 'jehonaakonushefci+1@gmail.com',
      firstName: 'jehonaa',
      lastName: 'vlvlvlvlvlvllvlvvl',
      birthDate: '1999-03-31',
      gender: 'MALE',
      role: 'STUDENT',
      password: 'rinori123'
    };
    this.userService.register(payload).subscribe(res => {
        console.log('');
      },
      (err) => {
        console.error(err);
      });
  }
}
