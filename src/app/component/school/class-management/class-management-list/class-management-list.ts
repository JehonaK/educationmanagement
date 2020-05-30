import { Component, Input, OnInit } from "@angular/core";
import { SchoolClassModel, SCHOOL_CLASSES } from '../../entities/school-class.model';
import { SchoolClassManagementService } from '../../services/subject-class-management.service';
import { SchoolManagementService } from '../../services/school-management.service';

@Component({
    selector: 'class-management-list',
    template: `<app-list [list]="listDetails()"></app-list>`
})
export class ClassManagementListComponent implements OnInit {

    classes: SchoolClassModel[];

    constructor(private schoolClassManagementService: SchoolManagementService) {
    }

    ngOnInit() {
        // this.classes = this.schoolClassManagementService.getEvents();
        // this.schoolClassManagementService.getClasses().subscribe(res =>
            // this.classes = res
        // );
    }

    listDetails() {
        return this.classes.map(subjectClass => { return { id: subjectClass.id, name: subjectClass.name } })
    }

}