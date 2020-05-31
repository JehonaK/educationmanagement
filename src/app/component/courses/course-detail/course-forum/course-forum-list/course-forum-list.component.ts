import { Component, OnInit } from '@angular/core';
import {ForumModel} from '../../../../../shared/models/forum.model';
import {CommentModel} from '../../../../../shared/models/comment.model';
import {MatDialog} from '@angular/material/dialog';
import {NewActivityModalComponent} from '../../course-activities/new-activity-modal/new-activity-modal.component';
import {NewForumPostModalComponent} from '../new-forum-post-modal/new-forum-post-modal.component';

@Component({
  selector: 'app-course-forum-list',
  templateUrl: './course-forum-list.component.html',
  styleUrls: ['./course-forum-list.component.scss']
})
export class CourseForumListComponent implements OnInit {
  forumPosts: ForumModel[];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getForumPostByCourseId();
  }
  openModal() {
    this.dialog.open(NewForumPostModalComponent, {
      width: '50%',
    });
  }
  getForumPostByCourseId(){
    this.forumPosts = [
      {
        id: 'dsf',
        title: 'forum title',
        content: 'am i doing it the right way?',
        courseId: '244d',
        authorId: 'fdf',
        comments: null,
      },
      {
        id: 'dsf',
        title: 'forum title',
        content: 'am i doing it the right way?',
        courseId: '244d',
        authorId: 'fdf',
        comments: null,
      },
      {
        id: 'dsf',
        title: 'forum title',
        content: 'am i doing it the right way?',
        courseId: '244d',
        authorId: 'fdf',
        comments: null,
      },
      {
        id: 'dsf',
        title: 'forum title',
        content: 'am i doing it the right way?',
        courseId: '244d',
        authorId: 'fdf',
        comments: null,
      },
    ];
  }
}
