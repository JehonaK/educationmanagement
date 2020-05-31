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
  }
}
