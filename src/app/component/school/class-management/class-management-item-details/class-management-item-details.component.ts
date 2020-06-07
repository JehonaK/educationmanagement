import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolClassModel, SCHOOL_CLASSES } from 'src/app/shared/models/school/school-class.model';
import { SchoolClassService } from 'src/app/shared/services/school/school-class.service';
import { MatDialog } from '@angular/material/dialog';
import { SchoolClassConfigurationModalComponent } from '../school-class-configuration-modal/school-class-configuration-modal.component';
import { SchoolClassStudentInsertionModalComponent } from '../school-class-student-insertion-modal/school-class-student-insertion-modal.component';
import { LEVELS, LevelModel } from 'src/app/shared/models/school/level.model';

@Component({
  selector: 'class-management-item-details',
  templateUrl: './class-management-item-details.component.html',
  styleUrls: ['./class-management-item-details.component.scss']
})
export class ClassManagementItemDetailsComponent implements OnInit {

  schoolClass: any;

  constructor(private route: ActivatedRoute,
    private schoolClassService: SchoolClassService,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const level: LevelModel = LEVELS.filter(level => level.id == params.get('levelId'))[0]

      this.schoolClass = level.schoolClasses.filter(schoolClass => schoolClass.id == params.get('classId'))[0];

      this.schoolClass.levelName = level.name
      // this.schoolClassService.getSchoolClassById(params.get('classId')).subscribe(resBody => {
      //   this.schoolClass = resBody;
      // });
    });
  }

  editClass() {
    this.dialog.open(SchoolClassConfigurationModalComponent, {
      width: '50%',
      data: { schoolClass: this.schoolClass }
    });
  }

  openStudentInsertionModal() {
    this.dialog.open(SchoolClassStudentInsertionModalComponent, {
      width: '50%',
      data: this.schoolClass
    });
  }

  deleteClass() {
    if (confirm('Are you sure you want to delete ' + this.schoolClass.name + '?')) {
      this.schoolClassService.deleteSchoolClassById(this.schoolClass.id).subscribe(
        res => {
          alert('Class ' + this.schoolClass.name + ' has been deleted.');
          this.router.navigate(['../../'], { relativeTo: this.route });
        });
    }
  }
}
