import { Component, OnInit } from '@angular/core';
import { SchoolModel, SCHOOL } from '../entities/school.model';
import { MatDialog } from "@angular/material/dialog";
import { SchoolSettingsModalComponent } from './school-settings-modal/school-settings-modal.component';
import { SchoolManagementService } from '../services/school-management.service';

@Component({
  selector: 'school-settings',
  templateUrl: './school-settings.component.html',
  styleUrls: ['./school-settings.component.scss']
})
export class SchoolSettingsComponent implements OnInit {

  school: SchoolModel;

  constructor(public dialog: MatDialog, private schoolManagementService: SchoolManagementService) {
  }

  ngOnInit(): void {
    this.schoolManagementService.getSchool().subscribe(res => {
      this.school = res;
    })

  }

  onClick() {
    this.dialog.open(SchoolSettingsModalComponent, {
      width: '500px',
      data: this.school
    })
  }

}
