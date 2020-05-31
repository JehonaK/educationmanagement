import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-submission-modal',
  templateUrl: './add-submission-modal.component.html',
  styleUrls: ['./add-submission-modal.component.scss']
})
export class AddSubmissionModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSubmissionModalComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close('');
  }
}
