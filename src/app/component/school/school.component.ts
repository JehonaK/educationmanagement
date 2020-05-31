import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/shared/services/school/school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  contentFor: string;
  constructor(private schoolService: SchoolService) { }


  ngOnInit(): void {
    // this.schoolService.getSchoolByAdmin(localStorage.getItem("adminId")).subscribe(res => {
    //   localStorage.setItem("schoolId", res.id)
    // });
  }

  changeContent(contentFor: string) {
    this.contentFor = contentFor.toUpperCase();
  }

}
