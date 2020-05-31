import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-new-forum-post-modal',
  templateUrl: './new-forum-post-modal.component.html',
  styleUrls: ['./new-forum-post-modal.component.scss']
})
export class NewForumPostModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewForumPostModalComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close('');
  }
}
