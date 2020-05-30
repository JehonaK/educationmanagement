import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LevelModel, LEVEL, LEVELS } from '../../entities/level.model';
import { SchoolManagementService } from '../../services/school-management.service';

@Component({
  selector: 'level-management-item-details',
  templateUrl: './level-management-item-details.component.html',
  styleUrls: ['./level-management-item-details.component.scss']
})
export class LevelManagementItemDetailsComponent implements OnInit {

  level: LevelModel;

  constructor(private route: ActivatedRoute, private levelManagementService: SchoolManagementService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.level = LEVELS.filter(lvl => lvl.id === params.get('id'))[0];
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

}
