import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-submission-modal',
  templateUrl: './add-submission-modal.component.html',
  styleUrls: ['./add-submission-modal.component.scss']
})
export class AddSubmissionModalComponent implements OnInit {
  addSubmission: FormGroup

  constructor(public dialogRef: MatDialogRef<AddSubmissionModalComponent>,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close('');
  }
  onAddSubmission(){

  }
}
