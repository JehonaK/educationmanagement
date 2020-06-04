import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getRole(){
    return localStorage.getItem('role');
  }
  getUserName(){
    return localStorage.getItem('firstName');
  }
  getLastName(){
    return localStorage.getItem('lastName');
  }
  getEmail(){
    return localStorage.getItem('email');
  }
  getGender(){
    return localStorage.getItem('gender');
  }
}
