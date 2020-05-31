import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-new-activity-modal',
  templateUrl: './new-activity-modal.component.html',
  styleUrls: ['./new-activity-modal.component.scss']
})
export class NewActivityModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewActivityModalComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close('');
  }
}
