import { Component, OnInit } from '@angular/core';
import {ForumModel} from '../../../../../shared/models/forum.model';

@Component({
  selector: 'app-course-forum-list',
  templateUrl: './course-forum-list.component.html',
  styleUrls: ['./course-forum-list.component.scss']
})
export class CourseForumListComponent implements OnInit {
  forumPosts: ForumModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
