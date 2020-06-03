import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-grade',
  templateUrl: './course-grade.component.html',
  styleUrls: ['./course-grade.component.scss']
})
export class CourseGradeComponent implements OnInit {
  @Input()
  courseId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
