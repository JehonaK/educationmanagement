import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FileUploadService} from '../../../../../shared/services/file-upload.service';

@Component({
  selector: 'app-add-submission-modal',
  templateUrl: './add-submission-modal.component.html',
  styleUrls: ['./add-submission-modal.component.scss']
})
export class AddSubmissionModalComponent implements OnInit {
  fileToUpload: File = null;

  constructor(public dialogRef: MatDialogRef<AddSubmissionModalComponent>,
              private fileUploadService: FileUploadService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close('');
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity(activityId: string) {
    this.fileUploadService.createFileUpload(this.fileToUpload, activityId).subscribe(res => {
      console.log(res);
    });
  }

  onSubmit(){
    this.uploadFileToActivity(this.data.activityId);
    this.closeDialog();
  }
}
