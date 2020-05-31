import { Component, OnInit, Inject } from '@angular/core';
import { SchoolClassModel } from 'src/app/shared/models/school/school-class.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolClassService } from 'src/app/shared/services/school/school-class.service';
import { SchoolClassStatus } from 'src/app/shared/models/school/school-class-status';

@Component({
  selector: 'app-school-class-configuration-modal',
  templateUrl: './school-class-configuration-modal.component.html',
  styleUrls: ['./school-class-configuration-modal.component.scss']
})
export class SchoolClassConfigurationModalComponent implements OnInit {

  schoolClassConfigurationForm: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<SchoolClassConfigurationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SchoolClassModel,
    private schoolClassService: SchoolClassService) { }


  ngOnInit(): void {
    if (!this.data) {
      this.schoolClassConfigurationForm = this.fb.group({
        name: ['', Validators.required],
        status: ['', Validators.required],
      })
    } else {
      this.schoolClassConfigurationForm = this.fb.group({
        name: [this.data.name, Validators.required],
        status: [this.data.status, Validators.required],
      })
    }
  }

  getSchoolClassStatus() {
    return Object.values(SchoolClassStatus);
  }

  submitForm() {
    this.data.name = this.schoolClassConfigurationForm.get('name').value;
    this.data.status = this.schoolClassConfigurationForm.get('status').value;
    if (this.data) {
      this.schoolClassService.updateSchoolClass(this.data, this.data.id).subscribe(resBody => {
        this.data = resBody;
        alert("Class " + this.data.name + " successfully updated");
        this.dialogRef.close();
      })
    } else {
      this.schoolClassService.createSchoolClass(this.data).subscribe(resBody => {
        this.data = resBody;
        alert("Class " + this.data.name + " successfully created");
        this.dialogRef.close();
      })
    }
  }

}
