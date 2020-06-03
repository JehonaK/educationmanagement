import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../../../shared/models/course.model';
import {CourseService} from '../../../shared/services/course.service';
import {CommentService} from '../../../shared/services/comment.service';
import {CommentModel} from '../../../shared/models/comment.model';

@Component({
  selector: 'app-courses-grid',
  templateUrl: './courses-grid.component.html',
  styleUrls: ['./courses-grid.component.scss']
})
export class CoursesGridComponent implements OnInit {
  courses: CourseModel[];
  comment: CommentModel;

  constructor(private courseService: CourseService,
              private commentService: CommentService) { }

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
      this.courses = res;
    });
  }
  getCoursesByTeacherId() {
    this.courseService.getCoursesByTeacherId().subscribe(res => {
      this.courses = res;
    });
  }
}
