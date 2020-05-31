import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewActivityModalComponent} from '../course-activities/new-activity-modal/new-activity-modal.component';
import {EditCourseCurriculumModalComponent} from '../edit-course-curriculum-modal/edit-course-curriculum-modal.component';
import {AddLessonModalComponent} from '../add-lesson-modal/add-lesson-modal.component';

@Component({
  selector: 'app-course-curriculum',
  templateUrl: './course-curriculum.component.html',
  styleUrls: ['./course-curriculum.component.scss']
})
export class CourseCurriculumComponent implements OnInit {
  lessons: any[];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
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
  getLessons() {
    this.lessons = [
      {
        name : 'Lession One',
        description: 'kldjhfljsdhbfljsdbfldjhbflsdj',
      },
      {
        name : 'Lession One',
        description: 'kldjhfljsdhbfljsdbfldjhbflsdj',
      },
      {
        name : 'Lession One',
        description: 'kldjhfljsdhbfljsdbfldjhbflsdj',
      },
    ];
  }

}
