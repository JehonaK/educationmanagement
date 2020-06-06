import { Component, OnInit } from '@angular/core';
import {ActivityModel} from '../../../../../shared/models/activity.model';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {NewActivityModalComponent} from '../new-activity-modal/new-activity-modal.component';
import {ActivityService} from '../../../../../shared/services/activity.service';

@Component({
  selector: 'app-course-activity-list',
  templateUrl: './course-activity-list.component.html',
  styleUrls: ['./course-activity-list.component.scss']
})
export class CourseActivityListComponent implements OnInit {
  activities: ActivityModel[];
  courseId: string;
  noTimeLeft: boolean;

  constructor(private dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private activityService: ActivityService) {
    this.dialog._afterAllClosed.subscribe(result => {
      this.getActivitiesByCourseId();
      console.log('constructor', this.activities);
    });
  }

  ngOnInit(): void {
    this.getCourseId();
    this.getActivitiesByCourseId();
  }
  openModal() {
    this.dialog.open(NewActivityModalComponent, {
      width: '50%',
      data: {
        courseId: this.courseId,
      }
    });
  }
  getCourseId(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.courseId = params.get('id');
    });
  }
  getActivitiesByCourseId(){
    this.activityService.getActivitiesByCourseId(this.courseId).subscribe(res => {
      this.activities = res;
      for (const activity of this.activities){
        activity.deadline = new Date(activity.deadline);
      }
    });
  }
  getRole() {
    return localStorage.getItem('role');
  }
}
