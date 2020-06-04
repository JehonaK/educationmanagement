import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {CourseModel} from '../../shared/models/course.model';
import {CourseService} from '../../shared/services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  courses: CourseModel[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    if (this.getRole() === 'STUDENT'){
      this.getCoursesByStudentId();
    }else {
      this.getCoursesByTeacherId();
    }
  }
  getRole(){
    return localStorage.getItem('role');
  }
  getCoursesByStudentId() {
    this.courseService.getCoursesByStudentId().subscribe(res => {
      for (let i = 0; i < 6; i++){
        this.courses.push(res[i]);
      }
      console.log(this.courses);
    });
  }
  getCoursesByTeacherId() {
    this.courseService.getCoursesByTeacherId().subscribe(res => {
      for (let i = 0; i < 6; i++){
        this.courses.push(res[i]);
      }
      console.log(this.courses);
    });
  }

  getCurrentDate(){
    return new Date();
  }
}
