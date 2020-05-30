import { Component, OnInit } from '@angular/core';
import {ForumModel} from '../../../../../shared/models/forum.model';
import {CommentModel} from '../../../../../shared/models/comment.model';

@Component({
  selector: 'app-course-forum-list',
  templateUrl: './course-forum-list.component.html',
  styleUrls: ['./course-forum-list.component.scss']
})
export class CourseForumListComponent implements OnInit {
  forumPosts: ForumModel[];
  constructor() { }

  ngOnInit(): void {
    this.getForumPostByCourseId()
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
