import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-forum',
  templateUrl: './course-forum.component.html',
  styleUrls: ['./course-forum.component.scss']
})
export class CourseForumComponent implements OnInit {
  @Input()
  courseId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
