import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ActivityService} from '../../../../../shared/services/activity.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FileUploadService} from '../../../../../shared/services/file-upload.service';

@Component({
  selector: 'app-new-activity-modal',
  templateUrl: './new-activity-modal.component.html',
  styleUrls: ['./new-activity-modal.component.scss']
})
export class NewActivityModalComponent implements OnInit {
  activityForm: FormGroup;
  fileToUpload: File = null;

  constructor(public dialogRef: MatDialogRef<NewActivityModalComponent>,
              private activityService: ActivityService,
              private fileUploadService: FileUploadService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.activityForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      gradeSystem: new FormControl('', Validators.required),
      deadline: new FormControl(''),
      hasFileUpload: new FormControl(''),
    });
  }
  closeDialog() {
    this.dialogRef.close('');
  }
  get getControls() {
    return this.activityForm.controls;
  }
  handleFileInput(files: FileList){
    this.fileToUpload = files.item(0);
  }
  uploadFileToActivity(activityId: string){
    this.fileUploadService.createFileUpload(this.fileToUpload, activityId).subscribe(res => {
      console.log(res);
    });
  }
  onNewActivity() {
    if (this.activityForm.valid) {
      const payload = {
        name: this.getControls.name.value,
        description: this.getControls.description.value,
        gradeSystem: this.getControls.gradeSystem.value,
        deadline: this.getControls.deadline.value,
        hasFileUpload: this.getControls.hasFileUpload.value,
        courseId: {
          id: this.data.courseId,
        }
      };
      console.log(payload);
      this.activityService.createActivity(payload).subscribe(response => {
          this.uploadFileToActivity(response.id);
        },
        (err) => {
          console.error(err);
        });
    } else {
      alert('form not valid');
    }
    this.closeDialog();
  }
}
