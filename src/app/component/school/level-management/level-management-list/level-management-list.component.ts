import { Component, Input, OnInit } from "@angular/core";
import { LevelModel, LEVELS } from '../../entities/level.model';
import { SchoolManagementService } from '../../services/school-management.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LevelCreationModalComponent } from '../level-creation-modal/level-creation-modal.component';

@Component({
    selector: 'level-management-list',
    templateUrl: './level-management-list.component.html',
    styleUrls: ['./level-management-list.component.scss']
})
export class LevelManagementListComponent implements OnInit {

    levels: LevelModel[] = LEVELS;

    levelCreationForm: FormGroup

    constructor(private fb: FormBuilder,
        private schoolManagementService: SchoolManagementService, private matDialog: MatDialog) { }

    ngOnInit() {
        // this.schoolManagementService.getLevels().subscribe(res=>{
        //     this.levels = res;
        // })
    }

    openModal() {
        this.matDialog.open(LevelCreationModalComponent, {
            width: '50%'
        });
    }

    listDetails() {
        return this.levels.map(level => { return { id: level.id, name: level.name } });
    }

}