import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from './services/school-management.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  contentFor: string;
  constructor(private schoolService: SchoolManagementService) { }


  ngOnInit(): void {
    this.schoolService.getSchool().subscribe(res => {
      localStorage.setItem("schoolId", res.id)
    });
  }

  changeContent(contentFor: string) {
    this.contentFor = contentFor.toUpperCase();
  }

}
