import { Component, Input, OnInit } from "@angular/core";
import { SchoolSubjectModel, SUBJECTS } from '../../entities/school-subject.model';
import { SchoolManagementService } from '../../services/school-management.service';

@Component({
    selector: 'subject-management-list',
    template: `<app-list [list]="listDetails()"></app-list>`
})
export class SubjectManagementListComponent implements OnInit {

    subjects: SchoolSubjectModel[] = SUBJECTS;

    constructor(private schoolManagementService: SchoolManagementService) {
        // this.schoolManagementService.getSubjects();
     }

    listDetails() {
        return this.subjects.map(subject => { return { name: subject.name } });
    }

    ngOnInit(){
    
    }

}