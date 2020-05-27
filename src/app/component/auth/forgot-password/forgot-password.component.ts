import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService} from '../../../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  get forgotPasswordControls() {
    return this.forgotPasswordForm.controls;
  }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  onForgotPasswordFormSubmit() {
    if (this.forgotPasswordForm.valid) {
      const payload = {
        email: this.forgotPasswordControls.email.value
      };
      this.userService.requestPasswordRecovery(this.forgotPasswordControls.email.value).subscribe(res => {
        this.userService.validatePasswordRecovery("").subscribe(resp => {
          this.router.navigateByUrl('/auth/reset-password');
        });
        },
        (err) => {
          console.error(err);
        });
    } else {
      alert('form not valid');
    }
  }

}
