import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-grade-list',
  templateUrl: './course-grade-list.component.html',
  styleUrls: ['./course-grade-list.component.scss']
})
export class CourseGradeListComponent implements OnInit {
  @Input()
  courseId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
