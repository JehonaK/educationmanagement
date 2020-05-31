import { Component, OnInit, Inject } from '@angular/core';
import { SchoolSubjectModel } from 'src/app/shared/models/school/school-subject.model';
import { SchoolSubjectService } from 'src/app/shared/services/school/school-subject.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolClassStatus } from 'src/app/shared/models/school/school-class-status';
import { SchoolSubjectType } from 'src/app/shared/models/school/school-subject-type.model';

@Component({
  selector: 'app-school-subject-configuration-modal',
  templateUrl: './school-subject-configuration-modal.component.html',
  styleUrls: ['./school-subject-configuration-modal.component.scss']
})
export class SchoolSubjectConfigurationModalComponent implements OnInit {

  schoolSubjectConfigurationForm: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<SchoolSubjectConfigurationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SchoolSubjectModel,
    private schoolSubjectService: SchoolSubjectService) { }


  ngOnInit(): void {
    if (!this.data) {
      this.schoolSubjectConfigurationForm = this.fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        description: ['', Validators.required]
      })
    } else {
      this.schoolSubjectConfigurationForm = this.fb.group({
        name: [this.data.name, Validators.required],
        type: [this.data.subjectType, Validators.required],
        description: [this.data.description, Validators.required]
      })
    }
  }

  getSchoolSubjectTypes() {
    return Object.values(SchoolSubjectType);
  }

  submitForm() {
    this.data.name = this.schoolSubjectConfigurationForm.get('name').value;
    this.data.description = this.schoolSubjectConfigurationForm.get('description').value;
    this.data.subjectType = this.schoolSubjectConfigurationForm.get('type').value;
    if (this.data) {
      this.schoolSubjectService.updateSubject(this.data, this.data.id).subscribe(resBody => {
        this.data = resBody;
        alert("Subject " + this.data.name + " successfully updated ");
        this.dialogRef.close();
      })
    } else {
      this.schoolSubjectService.createSubject(this.data).subscribe(resBody => {
        this.data = resBody;
        alert("Subject " + this.data.name + " successfully created ");
        this.dialogRef.close();
      })
    }
  }
}
