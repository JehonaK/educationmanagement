import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ActivityService} from '../../../../../shared/services/activity.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-activity-modal',
  templateUrl: './new-activity-modal.component.html',
  styleUrls: ['./new-activity-modal.component.scss']
})
export class NewActivityModalComponent implements OnInit {
  activityForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<NewActivityModalComponent>,
              private activityService: ActivityService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.activityForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      gradeSystem: new FormControl('', Validators.required),
    });
  }
  closeDialog() {
    this.dialogRef.close('');
  }
  get getControls() {
    return this.activityForm.controls;
  }
  onNewActivity() {
    if (this.activityForm.valid) {
      const payload = {
        name: this.getControls.name.value,
        description: this.getControls.description.value,
        gradeSystem: this.getControls.gradeSystem.value,
      };
      this.activityService.createActivity(payload).subscribe(response => {
          this.closeDialog();
        },
        (err) => {
          console.error(err);
        });
    } else {
      alert('form not valid');
    }
  }
}
