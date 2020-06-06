import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SubjectTeacherAssignmentModalComponent} from '../subject-teacher-assignment-modal/subject-teacher-assignment-modal.component';
import {SchoolSubjectModel, SUBJECTS} from 'src/app/shared/models/school/school-subject.model';
import {SchoolSubjectService} from 'src/app/shared/services/school/school-subject.service';
import {SchoolSubjectConfigurationModalComponent} from '../school-subject-configuration-modal/school-subject-configuration-modal.component';
import {SchoolClassModel} from 'src/app/shared/models/school/school-class.model';

@Component({
  selector: 'subject-management-item-details',
  templateUrl: './subject-management-item-details.component.html',
  styleUrls: ['./subject-management-item-details.component.scss']
})
export class SubjectManagementItemDetails implements OnInit {

  schoolSubject: any;
  private classes: SchoolClassModel[];

  constructor(private route: ActivatedRoute, private router: Router,
              private dialog: MatDialog, private schoolSubjectService: SchoolSubjectService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.schoolSubjectService.getSubjectById(params.get('subjectId')).subscribe(resBody => {
        this.schoolSubject = resBody;
      });
    });
  }

  openModal() {
    this.dialog.open(SubjectTeacherAssignmentModalComponent, {
      width: '50%',
      data: this.schoolSubject
    });
  }

  deleteSubject() {
    if (confirm('Are you sure you want to delete ' + this.schoolSubject.name + '?')) {
      this.schoolSubjectService.deleteSubjectById(this.schoolSubject.id).subscribe(res => {
        alert(this.schoolSubject.name + ' has been deleted.');
        this.router.navigate(['../../'], {relativeTo: this.route});
      });
    }
  }

  editSubject() {
    this.dialog.open(SchoolSubjectConfigurationModalComponent, {
      width: '50%',
      data: {subject: this.schoolSubject}
    });
  }

}
