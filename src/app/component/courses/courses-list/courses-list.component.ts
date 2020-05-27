import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../../../shared/models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
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
