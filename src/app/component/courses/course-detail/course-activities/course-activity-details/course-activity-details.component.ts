import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewActivityModalComponent} from '../new-activity-modal/new-activity-modal.component';
import {AddSubmissionModalComponent} from '../add-submission-modal/add-submission-modal.component';
import {ActivityService} from '../../../../../shared/services/activity.service';
import {ActivatedRoute} from '@angular/router';
import {ActivityModel} from '../../../../../shared/models/activity.model';

@Component({
  selector: 'app-course-activity-details',
  templateUrl: './course-activity-details.component.html',
  styleUrls: ['./course-activity-details.component.scss']
})
export class CourseActivityDetailsComponent implements OnInit {
  activity: ActivityModel;

  constructor(private dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivityById();
  }
  getRole(){
    return localStorage.getItem('role');
  }
  openModalAddSubmission() {
    this.dialog.open(AddSubmissionModalComponent, {
      width: '50%',
    });
  }
  openModalEditActivity() {
    this.dialog.open(NewActivityModalComponent, {
      width: '50%',
    });
  }
  getActivityById(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.activityService.getActivityById(params.get('id')).subscribe(res => {
        this.activity = res;
      });
    });
  }
}
