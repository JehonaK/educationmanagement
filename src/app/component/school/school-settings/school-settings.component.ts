import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SchoolSettingsModalComponent } from './school-settings-modal/school-settings-modal.component';
import { SchoolService } from 'src/app/shared/services/school/school.service';
import { SchoolModel, SCHOOL } from 'src/app/shared/models/school/school.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'school-settings',
  templateUrl: './school-settings.component.html',
  styleUrls: ['./school-settings.component.scss']
})
export class SchoolSettingsComponent implements OnInit {

  school: SchoolModel;

  constructor(public dialog: MatDialog, private schoolService: SchoolService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.schoolService.getSchoolByAdmin(localStorage.getItem("adminId")).subscribe(resBody => {
      this.school = resBody;
      this.school.schoolCreationDate = new Date(resBody.schoolCreationDate);
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
        this.router.navigate(['../../'], { relativeTo: this.route })
      });
    }
  }

}
