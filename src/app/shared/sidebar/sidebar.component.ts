import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getRole() {
    return localStorage.getItem('role');
  }

  canView(component: string) {
    switch (component) {
      case 'chat':
        return this.getRole() === ('TEACHER') || this.getRole() === ('PARENT');
      case 'meetings':
        return this.getRole() === ('TEACHER') || this.getRole() === ('PARENT');
      case 'course':
        return this.getRole() === ('TEACHER') || this.getRole() === ('STUDENT');
      case 'school':
        return this.getRole() === 'SCHOOL_ADMIN';
      case 'gradebook':
        return this.getRole() === ('TEACHER') || this.getRole() === ('PARENT');
      case 'associateStudent':
        return this.getRole() === 'PARENT';
    }
  }

}
