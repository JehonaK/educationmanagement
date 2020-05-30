import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SubjectTeacherAssignmentModalComponent } from '../subject-teacher-assignment-modal/subject-teacher-assignment-modal.component';
import { SchoolSubjectModel, SUBJECTS } from '../../entities/school-subject.model';

@Component({
  selector: 'subject-management-item-details',
  templateUrl: './subject-management-item-details.component.html',
  styleUrls: ['./subject-management-item-details.component.scss']
})
export class SubjectManagementItemDetails implements OnInit {

  schoolSubject: SchoolSubjectModel;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.schoolSubject = SUBJECTS.filter(subject => subject.id === params.get('subjectId'))[0];
    })
  }

  openModal() {
    this.dialog.open(SubjectTeacherAssignmentModalComponent, {
      width: '50%',
      data: this.schoolSubject.name
    })
  }

}
