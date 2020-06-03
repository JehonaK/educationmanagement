import { Component, OnInit } from '@angular/core';
import {ForumModel} from '../../../../../shared/models/forum.model';
import {CommentModel} from '../../../../../shared/models/comment.model';
import {MatDialog} from '@angular/material/dialog';
import {NewActivityModalComponent} from '../../course-activities/new-activity-modal/new-activity-modal.component';
import {NewForumPostModalComponent} from '../new-forum-post-modal/new-forum-post-modal.component';
import {ForumPostService} from '../../../../../shared/services/forum-post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-forum-list',
  templateUrl: './course-forum-list.component.html',
  styleUrls: ['./course-forum-list.component.scss']
})
export class CourseForumListComponent implements OnInit {
  forumPosts: ForumModel[];
  constructor(private dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private forumPostService: ForumPostService) { }

  ngOnInit(): void {
    this.getForumPostByCourseId();
  }
  openModal() {
    this.dialog.open(NewForumPostModalComponent, {
      width: '50%',
    });
  }
  getForumPostByCourseId(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.forumPostService.getForumPostsByCourseId(params.get('id')).subscribe(res => {
        this.forumPosts = res;
      });
    });
  }
}
