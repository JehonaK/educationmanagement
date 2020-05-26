import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { BaseStorageService } from 'src/app/shared/services/base-storage.service';
import { UserRegisterModel } from 'src/app/shared/models/user-register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService, 
              private formBuilder: FormBuilder,
              private router: Router,
              private baseStorageService: BaseStorageService
              ) { }

  get registerControls() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }, 
    );
  }

  onRegisterSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    const payload = new UserRegisterModel();
    payload.firstName = this.registerControls.firstName.value;
    payload.lastName = this.registerControls.lastName.value;
    payload.role = this.registerControls.role.value;
    payload.birthDate = this.registerControls.birthDate.value;
    payload.gender = this.registerControls.gender.value;
    payload.email = this.registerControls.email.value;
    payload.password = this.registerControls.password.value;
    this.userService.register(payload).subscribe((res) => {
          
      this.router.navigate(['/auth/login']);
      }, (err) => {
        alert(err.error.errorMessage);
      });
  }

}
