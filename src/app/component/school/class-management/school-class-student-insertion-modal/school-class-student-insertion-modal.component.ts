import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolClassService } from 'src/app/shared/services/school/school-class.service';

@Component({
  selector: 'app-school-class-student-insertion-modal',
  templateUrl: './school-class-student-insertion-modal.component.html',
  styleUrls: ['./school-class-student-insertion-modal.component.scss']
})
export class SchoolClassStudentInsertionModalComponent implements OnInit {

  studentInsertionForm: FormGroup

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<SchoolClassStudentInsertionModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private schoolClassService: SchoolClassService) { }

  ngOnInit(): void {
    this.studentInsertionForm = this.fb.group({
      name: [{ value: this.data.name, disabled: true }],
      email: ['']
    })
  }

  insertStudent() {
    this.schoolClassService.addStudentToClass(
      this.studentInsertionForm.get('email').value, this.data.id)
      .subscribe(resBody => {
        alert("Student added successfully");
        this.data.students.push(resBody);
        this.dialogRef.close();
      })
  }

}
