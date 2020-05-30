import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-teacher-assignment-modal',
  templateUrl: './subject-teacher-assignment-modal.component.html',
  styleUrls: ['./subject-teacher-assignment-modal.component.scss']
})
export class SubjectTeacherAssignmentModalComponent implements OnInit {

  subjectAssignment: FormGroup

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private matDialog: MatDialogRef<SubjectTeacherAssignmentModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('name'));
      console.log(params.get('title'));
      console.log(params.get('id'))
    })
    this.subjectAssignment = this.fb.group({
      subjectName: [{ value: this.data, disabled: true }],
      email: ['']

    })
  }

}
