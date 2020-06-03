import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SchoolSubjectService } from 'src/app/shared/services/school/school-subject.service';

@Component({
  selector: 'app-subject-teacher-assignment-modal',
  templateUrl: './subject-teacher-assignment-modal.component.html',
  styleUrls: ['./subject-teacher-assignment-modal.component.scss']
})
export class SubjectTeacherAssignmentModalComponent implements OnInit {

  subjectAssignmentForm: FormGroup

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private dialogRef: MatDialogRef<SubjectTeacherAssignmentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private schoolSubjectService: SchoolSubjectService) { }


  ngOnInit(): void {
    this.subjectAssignmentForm = this.fb.group({
      name: [{ value: this.data.name, disabled: true }],
      email: [''],
      classes: this.fb.array(this.data.schoolClasses.map(schoolClass => { return this.fb.control({ selected: true }) }))
    })
  }

  get classes() {
    return this.subjectAssignmentForm.get('classes') as FormArray;
  }

  inviteTeacher() {
    let classes = [];
    for (let i = 0; i < this.classes.length; i++) {
      if (this.classes.controls[i].value)
        classes.push(this.data.schoolClasses[i].id);
    }
    this.schoolSubjectService.assignTeacherToSubject(
      this.subjectAssignmentForm.get('email').value, this.data.id, classes)
      .subscribe(resBody => {
        alert("Invitation sent");
        this.dialogRef.close();
      })
  }

}
