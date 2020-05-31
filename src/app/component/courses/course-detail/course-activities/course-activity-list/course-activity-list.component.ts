import { Component, OnInit } from '@angular/core';
import {ActivityModel} from '../../../../../shared/models/activity.model';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SubjectTeacherAssignmentModalComponent} from '../../../../school/subject-management/subject-teacher-assignment-modal/subject-teacher-assignment-modal.component';
import {NewActivityModalComponent} from '../new-activity-modal/new-activity-modal.component';
import {EvaluationModel} from '../../../../../shared/models/evaluation.model';

@Component({
  selector: 'app-course-activity-list',
  templateUrl: './course-activity-list.component.html',
  styleUrls: ['./course-activity-list.component.scss']
})
export class CourseActivityListComponent implements OnInit {
  activities: ActivityModel[];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getActivities();
  }
  openModal() {
    this.dialog.open(NewActivityModalComponent, {
      width: '50%',
    });
  }
  getActivities(){
    this.activities = [
      {
        id: '61d4c861-18e6-4c76-a59b-36202fc2015b',
        name: 'string',
        description: 'dsfsdfasd dfdsf fdsf sd f sd  d ',
        deadline: null,
        courseId: 'string',
        evaluations: null,
      },
      {
        id: '61d4c861-18e6-4c76-a59b-36202fc2015b',
        name: 'string',
        description: 'dsfsdfasd dfdsf fdsf sd f sd  d ',
        deadline: null,
        courseId: 'string',
        evaluations: null,
      },
      {
        id: '61d4c861-18e6-4c76-a59b-36202fc2015b',
        name: 'string',
        description: 'dsfsdfasd dfdsf fdsf sd f sd  d ',
        deadline: null,
        courseId: 'string',
        evaluations: null,
      },
    ];
  }
}
