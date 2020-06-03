import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-course-curriculum-modal',
  templateUrl: './edit-course-curriculum-modal.component.html',
  styleUrls: ['./edit-course-curriculum-modal.component.scss']
})
export class EditCourseCurriculumModalComponent implements OnInit {
  @Input()
  courseId: string;
  constructor(public dialogRef: MatDialogRef<EditCourseCurriculumModalComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close('');
  }
}
