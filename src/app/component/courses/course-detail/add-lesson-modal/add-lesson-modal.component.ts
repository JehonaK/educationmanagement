import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-lesson-modal',
  templateUrl: './add-lesson-modal.component.html',
  styleUrls: ['./add-lesson-modal.component.scss']
})
export class AddLessonModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddLessonModalComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close('');
  }
}
