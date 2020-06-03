import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LevelConfigurationModalComponent } from '../level-configuration-modal/level-configuration-modal.component';
import { LevelModel, LEVELS } from 'src/app/shared/models/school/level.model';
import { LevelService } from 'src/app/shared/services/school/level.service';

@Component({
    selector: 'level-management-list',
    templateUrl: './level-management-list.component.html',
    styleUrls: ['./level-management-list.component.scss']
})
export class LevelManagementListComponent implements OnInit {

    levels: LevelModel[];

    levelCreationForm: FormGroup

    constructor(private fb: FormBuilder,
        private levelService: LevelService,
        private matDialog: MatDialog) { }

    ngOnInit() {
        // this.schoolManagementService.getLevels().subscribe(res=>{
        //     this.levels = res;
        // })
        this.levelService.getLevelsBySchoolId(localStorage.getItem("schoolId")).subscribe(resBody => {
            this.levels = resBody;
        })
    }

    openModal() {
        this.matDialog.open(LevelConfigurationModalComponent, {
            width: '50%',
            data: { levels: this.levels }
        });
    }

    // listDetails() {
    //     return this.levels.map(level => { return { id: level.id, name: level.name } });
    // }

}