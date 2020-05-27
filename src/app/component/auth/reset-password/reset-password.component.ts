import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  id: string;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      password: [''],
      confirmPassword: ['']
    })
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.userService.validatePasswordRecovery(params.get('id')).subscribe(res => {
        alert('verified')

      }, err => {
        alert('too late')
        this.router.navigateByUrl('/auth/forgot-password');
      })
    })
  }

  get controls() {
    return this.resetPasswordForm.controls;
  }

  resetPassword() {
    if (this.controls.password.value != this.controls.confirmPassword.value) {
      alert('passwords must match!');
    } else {
      this.userService.changePassword(this.id, this.controls.password.value).subscribe(res => {
        console.log(res);
      });
    }
  }

}
