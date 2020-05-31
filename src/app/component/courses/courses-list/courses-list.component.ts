import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../../../shared/models/course.model';
import {CommentModel} from '../../../shared/models/comment.model';
import {CourseService} from '../../../shared/services/course.service';
import {CommentService} from '../../../shared/services/comment.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: CourseModel[];

  constructor(private courseService: CourseService, ) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.courseService.getCoursesByTeacherId('6619afe0-f0ef-4aa5-a1e4-a597e8174bbf').subscribe(res => {
      this.courses = res;
      console.log(res);
    });
  }
}
