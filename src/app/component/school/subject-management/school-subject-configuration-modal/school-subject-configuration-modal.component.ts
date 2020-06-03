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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private schoolSubjectService: SchoolSubjectService) { }


  ngOnInit(): void {
    if (!this.data.subject) {
      this.schoolSubjectConfigurationForm = this.fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        description: ['', Validators.required]
      })
    } else {
      this.schoolSubjectConfigurationForm = this.fb.group({
        name: [this.data.subject.name, Validators.required],
        type: [this.data.subject.subjectType, Validators.required],
        description: [this.data.subject.description, Validators.required]
      })
    }
  }

  getSchoolSubjectTypes() {
    return Object.values(SchoolSubjectType);
  }

  submitForm() {

    if (this.data.subject) {
      this.data.subject.name = this.schoolSubjectConfigurationForm.get('name').value;
      this.data.subject.description = this.schoolSubjectConfigurationForm.get('description').value;
      this.data.subject.subjectType = this.schoolSubjectConfigurationForm.get('type').value;
      this.schoolSubjectService.updateSubject(this.data.subject, this.data.subject.id).subscribe(resBody => {
        this.data.subject = resBody;
        alert("Subject " + resBody.name + " successfully updated ");
        this.dialogRef.close();
      })
    } else {
      this.data.subject = new SchoolSubjectModel(null, this.schoolSubjectConfigurationForm.get('name').value,
        this.schoolSubjectConfigurationForm.get('description').value, this.data.level.id,
        this.schoolSubjectConfigurationForm.get('type').value)
      this.schoolSubjectService.createSubject(this.data.subject).subscribe(resBody => {
        this.data.subject = resBody;
        this.data.level.subjects.push(this.data.subject);
        alert("Subject " + resBody.name + " successfully created ");
        this.dialogRef.close();
      })
    }
  }
}
