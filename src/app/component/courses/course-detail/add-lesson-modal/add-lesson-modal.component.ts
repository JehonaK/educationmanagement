import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LessonModel} from '../../../../shared/models/lesson.model';
import {CourseService} from '../../../../shared/services/course.service';
import {FileUploadService} from '../../../../shared/services/file-upload.service';

@Component({
  selector: 'app-add-lesson-modal',
  templateUrl: './add-lesson-modal.component.html',
  styleUrls: ['./add-lesson-modal.component.scss']
})
export class AddLessonModalComponent implements OnInit {
  addLesson: FormGroup;
  fileToUpload: File = null;

  constructor(public dialogRef: MatDialogRef<AddLessonModalComponent>,
              private formBuilder: FormBuilder,
              private courseService: CourseService,
              private fileUploadService: FileUploadService,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.addLesson = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
  closeDialog() {
    this.dialogRef.close('');
  }
  get getControls() {
    return this.addLesson.controls;
  }
  handleFileInput(files: FileList){
    this.fileToUpload = files.item(0);
  }
  uploadFileToActivity(lessonId: string){
    this.fileUploadService.createFileUploadForLesson(this.fileToUpload, lessonId).subscribe(res => {
      console.log(res);
    });
  }
  onAddLesson() {
    if (this.addLesson.valid) {
      const payload = {
        name: this.getControls.name.value,
        description: this.getControls.description.value,
        courseId: {
          id: this.data.courseId,
        }
      };
      console.log(payload);
      this.courseService.createLesson(payload).subscribe(response => {
          this.uploadFileToActivity(response.id);
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
