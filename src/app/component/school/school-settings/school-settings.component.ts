import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SchoolSettingsModalComponent } from './school-settings-modal/school-settings-modal.component';
import { SchoolManagementService } from '../services/school-management.service';
import { SchoolService } from 'src/app/shared/services/school/school.service';
import { SchoolModel, SCHOOL } from 'src/app/shared/models/school/school.model';

@Component({
  selector: 'school-settings',
  templateUrl: './school-settings.component.html',
  styleUrls: ['./school-settings.component.scss']
})
export class SchoolSettingsComponent implements OnInit {

  school: SchoolModel;

  constructor(public dialog: MatDialog, private schoolService: SchoolService) {
  }

  ngOnInit(): void {
    // this.schoolManagementService.getSchool().subscribe(res => {
    //   this.school = res;
    // })
    this.schoolService.getSchoolByAdmin(localStorage.getItem("token")).subscribe(resBody => {
      this.school = resBody;
    });
    // this.school = SCHOOL;
  }

  edit() {
    this.dialog.open(SchoolSettingsModalComponent, {
      width: '50%',
      data: this.school
    })
  }

  delete() {

    if (confirm("Are you sure you want to delete" + this.school.name + "?")) {
      this.schoolService.deleteSchoolById(this.school.id).subscribe(res => {
        alert("School" + this.school.name + " has been deleted");
      });
      // this.schoolManagementService.deleteSchool(this.school);
    }
  }

}
