import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-activities',
  templateUrl: './course-activities.component.html',
  styleUrls: ['./course-activities.component.scss']
})
export class CourseActivitiesComponent implements OnInit {
  @Input()
  courseId: string;
  constructor() { }

  ngOnInit(): void {
  }
}
