import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../../../../shared/services/comment.service';
import {CommentModel} from '../../../../../shared/models/comment.model';
import {ForumPostService} from '../../../../../shared/services/forum-post.service';
import {ForumModel} from '../../../../../shared/models/forum.model';
import {UserRegisterModel} from '../../../../../shared/models/user-register.model';
import {Timestamp} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-course-forum-post',
  templateUrl: './course-forum-post.component.html',
  styleUrls: ['./course-forum-post.component.scss']
})
export class CourseForumPostComponent implements OnInit {
  comments: CommentModel[];
  forumPost: ForumModel;
  postComment: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private forumPostService: ForumPostService,
              private commentService: CommentService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getForumPost();
    this.postComment = this.formBuilder.group({
      content: new FormControl('', Validators.required),
    });
  }
  getForumPost(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.forumPostService.getForumPostById(params.get('id')).subscribe(res => {
        this.forumPost = res;
        console.log(res);
        this.comments = res.comments;
      });
    });
  }

  getCommentsByForumPostId(){
    this.comments = this.forumPost.comments;
  }
  get getControls() {
    return this.postComment.controls;
  }
  onPostComment() {
    if (this.postComment.valid) {
      const payload = {
        content: this.getControls,
        postId: this.forumPost.id,
      };
      this.commentService.createComment(payload).subscribe(response => {
      },
      (err) => {
        console.error(err);
      });
    } else {
      alert('form not valid');
    }
  }

}
