import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelService } from 'src/app/shared/services/school/level.service';
import { MatDialog } from '@angular/material/dialog';
import { LevelConfigurationModalComponent } from '../level-configuration-modal/level-configuration-modal.component';
import { LevelModel, LEVELS } from 'src/app/shared/models/school/level.model';
import { SchoolClassConfigurationModalComponent } from '../../class-management/school-class-configuration-modal/school-class-configuration-modal.component';
import { SchoolSubjectConfigurationModalComponent } from '../../subject-management/school-subject-configuration-modal/school-subject-configuration-modal.component';
import { SchoolClassService } from 'src/app/shared/services/school/school-class.service';
import { SchoolSubjectService } from 'src/app/shared/services/school/school-subject.service';

@Component({
  selector: 'level-management-item-details',
  templateUrl: './level-management-item-details.component.html',
  styleUrls: ['./level-management-item-details.component.scss']
})
export class LevelManagementItemDetailsComponent implements OnInit {

  level: LevelModel;

  constructor(private route: ActivatedRoute,
    private levelService: LevelService,
    private dialog: MatDialog,
    private schoolClassService: SchoolClassService,
    private schoolSubjectService: SchoolSubjectService,
    private router: Router) {
      this.ngOnInit();
     }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const levelId = params.get('id');
      this.levelService.getLevelById(levelId).subscribe(resBody => {
        this.level = resBody;
        this.schoolClassService.getClassByLevelId(levelId).subscribe(resBody => {
          this.level.schoolClasses = resBody;
        })
        this.schoolSubjectService.getSubjectsByLevelId(levelId).subscribe(resBody => {
          this.level.subjects = resBody;
        })
      })
      // this.level = LEVELS.filter(lvl => lvl.id === params.get('id'))[0];
      //   this.levelManagementService.getLevelById(params.get('id')).subscribe(res => {
      //     this.level = res;
      //     this.levelManagementService.getSchoolClassesByLevelId(params.get('id')).subscribe(res =>
      //       this.level.schoolClasses = res
      //     );
      //     this.levelManagementService.getSchoolSubjectsByLevelId(params.get('id')).subscribe(res => {
      //       this.level.subjects = res;
      //     })
      //   });
    })


  }

  openSubjectModal() {
    this.dialog.open(SchoolSubjectConfigurationModalComponent, {
      width: "50%",
      data: { level: this.level }
    })
  }

  openClassModal() {
    this.dialog.open(SchoolClassConfigurationModalComponent, {
      width: "50%",
      data: { level: this.level }
    });
  }

  editLevel() {
    this.dialog.open(LevelConfigurationModalComponent, {
      width: "50%",
      data: { level: this.level }
    });
  }

  deleteLevel() {
    if (confirm("Are you sure you want to delete " + this.level.name + "?")) {
      this.levelService.deleteLevelById(this.level.id).subscribe(res => {
        alert("Level " + this.level.name + " has been deleted");
        delete(this.level);
        this.router.navigate(['../'], { relativeTo: this.route })
      });
    }

  }

}
