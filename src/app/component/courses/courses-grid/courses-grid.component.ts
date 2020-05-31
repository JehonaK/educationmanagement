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
    this.getLessons();
  }
  getLessons() {
    this.commentService.getCommentById('6619afe0-f0ef-4aa5-a1e4-a597e8174bbf').subscribe(res => {
      this.comment = res;
      console.log(res);
    });
    console.log(this.courses);
    console.log(localStorage.getItem("token"));
  }
}
