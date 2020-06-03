import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewActivityModalComponent} from '../new-activity-modal/new-activity-modal.component';
import {AddSubmissionModalComponent} from '../add-submission-modal/add-submission-modal.component';
import {ActivityService} from '../../../../../shared/services/activity.service';
import {ActivatedRoute} from '@angular/router';
import {ActivityModel} from '../../../../../shared/models/activity.model';
import {FileUploadModel} from '../../../../../shared/models/file-upload.model';
import {FileUploadService} from '../../../../../shared/services/file-upload.service';

@Component({
  selector: 'app-course-activity-details',
  templateUrl: './course-activity-details.component.html',
  styleUrls: ['./course-activity-details.component.scss']
})
export class CourseActivityDetailsComponent implements OnInit {
  activity: ActivityModel;
  timeRemaining: string;

  constructor(private dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private activityService: ActivityService,
              private fileUploadService: FileUploadService) {
  }

  ngOnInit(): void {
    this.getActivityById();
  }

  getRole() {
    return localStorage.getItem('role');
  }

  openModalAddSubmission() {
    this.dialog.open(AddSubmissionModalComponent, {
      width: '50%',
      data: {
        activityId: this.activity.id,
      }
    });
  }

  openModalEditActivity() {
    this.dialog.open(NewActivityModalComponent, {
      width: '50%',
    });
  }

  getActivityById() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.activityService.getActivityById(params.get('id')).subscribe(res => {
        console.log(res);
        this.activity = res;
        this.activity.deadline = new Date(res.deadline);
        let timeLeft = (this.activity.deadline.getTime() - new Date().getTime());
        let minus = '';
        if (timeLeft < 0) {
          minus = '-';
          timeLeft *= -1;
        }
        const timeLeftDays = Math.floor(Math.abs(timeLeft / (1000 * 3600 * 24)));
        timeLeft -= Math.abs(timeLeftDays * (1000 * 3600 * 24));
        const timeLeftHours = Math.floor(Math.abs(timeLeft / (1000 * 3600)));
        timeLeft -= timeLeftHours * (1000 * 3600);
        const timeLeftMinutes = Math.floor(Math.abs(timeLeft / (1000 * 60)));
        timeLeft -= timeLeftMinutes * (1000 * 60);
        const timeLeftSeconds = Math.floor(Math.abs(timeLeft / 1000));
        this.timeRemaining = minus + timeLeftDays + ' days, ' + timeLeftHours + ' hours, ' + timeLeftMinutes + ' minutes, ' + timeLeftSeconds + ' seconds';
      });
    });
  }
  getFileUploadByActivityId(id: string): FileUploadModel[]{
    let fileUploads: FileUploadModel[];
    this.fileUploadService.getFileUploadsByActivityId(id).subscribe(res => {
      console.log('resss', res);
      return fileUploads = res;
    });
    return fileUploads;
  }
}
