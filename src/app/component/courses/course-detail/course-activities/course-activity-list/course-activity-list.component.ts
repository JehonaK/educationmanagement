import { Component, OnInit } from '@angular/core';
import {ActivityModel} from '../../../../../shared/models/activity.model';

@Component({
  selector: 'app-course-activity-list',
  templateUrl: './course-activity-list.component.html',
  styleUrls: ['./course-activity-list.component.scss']
})
export class CourseActivityListComponent implements OnInit {
  activities: ActivityModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
