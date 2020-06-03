import { Component, OnInit } from '@angular/core';
import {ActivityModel} from '../../../../../shared/models/activity.model';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SubjectTeacherAssignmentModalComponent} from '../../../../school/subject-management/subject-teacher-assignment-modal/subject-teacher-assignment-modal.component';
import {NewActivityModalComponent} from '../new-activity-modal/new-activity-modal.component';
import {EvaluationModel} from '../../../../../shared/models/evaluation.model';
import {ActivityService} from '../../../../../shared/services/activity.service';

@Component({
  selector: 'app-course-activity-list',
  templateUrl: './course-activity-list.component.html',
  styleUrls: ['./course-activity-list.component.scss']
})
export class CourseActivityListComponent implements OnInit {
  activities: ActivityModel[];

  constructor(private dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivitiesByCourseId();
  }
  openModal() {
    this.dialog.open(NewActivityModalComponent, {
      width: '50%',
    });
  }
  getActivitiesByCourseId(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.activityService.getActivitiesByCourseId(params.get('id')).subscribe(res => {
        this.activities = res;
      });
    });
  }
}
