import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewActivityModalComponent} from '../new-activity-modal/new-activity-modal.component';
import {AddSubmissionModalComponent} from '../add-submission-modal/add-submission-modal.component';

@Component({
  selector: 'app-course-activity-details',
  templateUrl: './course-activity-details.component.html',
  styleUrls: ['./course-activity-details.component.scss']
})
export class CourseActivityDetailsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.getActivities();
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
}
