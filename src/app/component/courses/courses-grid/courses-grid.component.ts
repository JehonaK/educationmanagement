import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../../../shared/models/course.model';

@Component({
  selector: 'app-courses-grid',
  templateUrl: './courses-grid.component.html',
  styleUrls: ['./courses-grid.component.scss']
})
export class CoursesGridComponent implements OnInit {
  courses: CourseModel[];

  constructor() { }

  ngOnInit(): void {
    this.getLessons();
  }
  getLessons() {
    this.courses = [
      {
        name: 'Lession One',
        description: 'kldjhfljsdhbfljsdbfldjhbflsdj',
        teacherId: 'sd',
        id: 'd',
        subjectId: 'd',
        activities: null,
        forumPosts: null,
        students: null
      },
      {
        name: 'Lession One',
        description: 'kldjhfljsdhbfljsdbfldjhbflsdj',
        teacherId: 'sd',
        id: 'd',
        subjectId: 'd',
        activities: null,
        forumPosts: null,
        students: null
      },
      {
        name: 'Lession One',
        description: 'kldjhfljsdhbfljsdbfldjhbflsdj',
        teacherId: 'sd',
        id: 'd',
        subjectId: 'd',
        activities: null,
        forumPosts: null,
        students: null
      },
    ];
  }
}
