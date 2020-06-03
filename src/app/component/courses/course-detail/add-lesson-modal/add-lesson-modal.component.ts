import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LessonModel} from '../../../../shared/models/lesson.model';
import {CourseService} from '../../../../shared/services/course.service';

@Component({
  selector: 'app-add-lesson-modal',
  templateUrl: './add-lesson-modal.component.html',
  styleUrls: ['./add-lesson-modal.component.scss']
})
export class AddLessonModalComponent implements OnInit {
  addLesson: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddLessonModalComponent>,
              private formBuilder: FormBuilder,
              private courseService: CourseService) { }

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
  onAddLesson() {
    if (this.addLesson.valid) {
      const payload = {
        name: this.getControls.name.value,
        description: this.getControls.description.value,
      };
      this.courseService.createLesson(payload).subscribe(response => {
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
