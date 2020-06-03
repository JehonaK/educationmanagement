import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ForumPostService} from '../../../../../shared/services/forum-post.service';
import {CommentService} from '../../../../../shared/services/comment.service';

@Component({
  selector: 'app-new-forum-post-modal',
  templateUrl: './new-forum-post-modal.component.html',
  styleUrls: ['./new-forum-post-modal.component.scss']
})
export class NewForumPostModalComponent implements OnInit {
  forumPost: FormGroup;
  courseId: string;

  constructor(public dialogRef: MatDialogRef<NewForumPostModalComponent>,
              private activatedRoute: ActivatedRoute,
              private forumPostService: ForumPostService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.forumPost = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
  }
  closeDialog() {
    this.dialogRef.close('');
  }
  get getControls() {
    return this.forumPost.controls;
  }
  onForumPost() {
    if (this.forumPost.valid) {
      const payload = {
        title: this.getControls.title.value,
        content: this.getControls.content.value,
        courseId: {
          id: this.data.courseId,
        }
      };
      this.forumPostService.createForumPost(payload).subscribe(response => {
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
