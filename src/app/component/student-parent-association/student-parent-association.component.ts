import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-parent-association',
  templateUrl: './student-parent-association.component.html',
  styleUrls: ['./student-parent-association.component.scss']
})
export class StudentParentAssociationComponent implements OnInit {

  studentAssociationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

    
  ngOnInit(): void {
    this.studentAssociationForm = this.fb.group({
      email: ['']
    })
  }

  associateWithStudent(){
    alert("eeeeeee");
  }

}
