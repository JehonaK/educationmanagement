import { Component, OnInit } from '@angular/core';
import {CourseModel, COURSE} from '../../../shared/models/course.model';
import {CourseService} from '../../../shared/services/course.service';
import {CommentService} from '../../../shared/services/comment.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: CourseModel[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    if (this.getRole() === 'STUDENT'){
      this.getCoursesByStudentId();
    }else {
      this.getCoursesByTeacherId();
    }
    this.courses = [COURSE, COURSE];
  }
  getRole(){
    return localStorage.getItem('role');
  }
  getCoursesByStudentId() {
    this.courseService.getCoursesByStudentId().subscribe(res => {
      this.courses = res;
      console.log(res);
    });
  }
  getCoursesByTeacherId() {
    this.courseService.getCoursesByTeacherId().subscribe(res => {
      this.courses = res;
      console.log(res);
    });
  }
}
