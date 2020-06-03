import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewActivityModalComponent} from '../course-activities/new-activity-modal/new-activity-modal.component';
import {EditCourseCurriculumModalComponent} from '../edit-course-curriculum-modal/edit-course-curriculum-modal.component';
import {AddLessonModalComponent} from '../add-lesson-modal/add-lesson-modal.component';
import {CourseModel} from '../../../../shared/models/course.model';
import {CourseService} from '../../../../shared/services/course.service';
import {ActivatedRoute} from '@angular/router';
import {LessonModel} from '../../../../shared/models/lesson.model';
import {FileUploadService} from '../../../../shared/services/file-upload.service';
import {FileUploadModel} from '../../../../shared/models/file-upload.model';

@Component({
  selector: 'app-course-curriculum',
  templateUrl: './course-curriculum.component.html',
  styleUrls: ['./course-curriculum.component.scss']
})
export class CourseCurriculumComponent implements OnInit {
  course: CourseModel;
  courseId: string;
  lessons: LessonModel[];

  constructor(private dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private courseService: CourseService,
              private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.getCourseById();
    this.getLessons();
    this.dialog.afterAllClosed.subscribe(res => {
      this.getLessons();
    });
  }
  getRole(){
    return localStorage.getItem('role');
  }
  getCourseById(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.courseId = params.get('id');
      this.courseService.getCourseById(this.courseId).subscribe(res => {
        this.course = res;
      });
    });
  }
  openModalEditCourse() {
    this.dialog.open(EditCourseCurriculumModalComponent, {
      width: '50%',
    });
  }
  openModalAddLesson() {
    this.dialog.open(AddLessonModalComponent, {
      width: '50%',
      data: {
        courseId: this.courseId,
      }
    });
  }
  getLessons() {
    this.courseService.getLessonsByCourseId(this.courseId).subscribe(res => {
      this.lessons = res;
    });
  }
  getFileUploadByLessonId(id: string): FileUploadModel[]{
    let fileUploads: FileUploadModel[];
    this.fileUploadService.getFileUploadsByLessonId(id).subscribe(res => {
      console.log('resss', res);
      return fileUploads = res;
    });
    return fileUploads;
  }

}
