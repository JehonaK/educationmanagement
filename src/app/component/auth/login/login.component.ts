import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  get loginControls() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  onLoginFormSubmit() {
    if (this.loginForm.valid) {
      const payload = {
        email: this.loginControls.email.value,
        password: this.loginControls.password.value
      };
      this.userService.login(payload.email, payload.password).subscribe(response => {
        localStorage.setItem("token", response.headers.get("Authorization"))
        this.router.navigate(['/dashboard']);
        },
        (err) => {
          console.error(err);
        });
    } else {
      alert('form not valid');
    }
  
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
