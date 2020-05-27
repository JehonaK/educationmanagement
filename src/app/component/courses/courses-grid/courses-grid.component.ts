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
  }

}
