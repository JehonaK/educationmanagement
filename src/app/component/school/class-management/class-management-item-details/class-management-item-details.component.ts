import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SCHOOL_CLASSES, SchoolClassModel } from '../../entities/school-class.model';
import { SchoolManagementService } from '../../services/school-management.service';

@Component({
  selector: 'class-management-item-details',
  templateUrl: './class-management-item-details.component.html',
  styleUrls: ['./class-management-item-details.component.scss']
})
export class ClassManagementItemDetailsComponent implements OnInit {

  schoolClass: SchoolClassModel;

  constructor(private route: ActivatedRoute, private schoolManagementService: SchoolManagementService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // this.schoolManagementService.getClassById(params.get('id')).subscribe(res =>
      //   this.schoolClass = res
      // )
      this.schoolClass = SCHOOL_CLASSES.filter(schoolClass => schoolClass.id == params.get('classId'))[0];
    }
    )
  }

}
