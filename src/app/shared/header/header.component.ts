import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartQty = 0;
  opened = false;
  status2 = false;
  status3 = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toggleClass() {
    this.status2 = false;
    this.opened = !this.opened;
  }

  toggleClass2() {
    this.opened = false;
    this.status2 = !this.status2;
  }

  onHamburgerclick() {
    this.status3 = !this.status3;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  onLogOut(){
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
  getRole(){
    return localStorage.getItem('role');
  }
}
