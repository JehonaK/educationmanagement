import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewActivityModalComponent} from '../course-activities/new-activity-modal/new-activity-modal.component';
import {EditCourseCurriculumModalComponent} from '../edit-course-curriculum-modal/edit-course-curriculum-modal.component';
import {AddLessonModalComponent} from '../add-lesson-modal/add-lesson-modal.component';
import {CourseModel} from '../../../../shared/models/course.model';
import {CourseService} from '../../../../shared/services/course.service';
import {ActivatedRoute} from '@angular/router';
import {LessonModel} from '../../../../shared/models/lesson.model';
import {LessonService} from '../../../../shared/services/lesson.service';

@Component({
  selector: 'app-course-curriculum',
  templateUrl: './course-curriculum.component.html',
  styleUrls: ['./course-curriculum.component.scss']
})
export class CourseCurriculumComponent implements OnInit {
  course: CourseModel;
  lessons: LessonModel[];

  constructor(private dialog: MatDialog,
              private courseService: CourseService,
              private lessonService: LessonService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCourseById();
    this.getLessons();
  }
  openModalEditCourse() {
    this.dialog.open(EditCourseCurriculumModalComponent, {
      width: '50%',
    });
  }
  openModalAddLesson() {
    this.dialog.open(AddLessonModalComponent, {
      width: '50%',
    });
  }
  getCourseById() {
    this.route.paramMap.subscribe(params => {
      this.courseService.getCourseById(params.get('id')).subscribe(res => {
        this.course = res;
        console.log(params.get('id'));
        console.log(res);
      });
    });
  }
  getLessons() {
    this.lessonService.getLessonsByCourseId(this.course.id).subscribe( res => {
      this.lessons = res;
    });
  }

}
