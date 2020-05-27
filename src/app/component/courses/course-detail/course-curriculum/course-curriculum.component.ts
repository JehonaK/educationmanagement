import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-curriculum',
  templateUrl: './course-curriculum.component.html',
  styleUrls: ['./course-curriculum.component.scss']
})
export class CourseCurriculumComponent implements OnInit {
  lessons: any[];

  constructor() { }

  ngOnInit(): void {
    this.getLessons();
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
