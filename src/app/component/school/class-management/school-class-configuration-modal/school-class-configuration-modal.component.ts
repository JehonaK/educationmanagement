import { Component, OnInit, Inject } from '@angular/core';
import { SchoolClassModel } from 'src/app/shared/models/school/school-class.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolClassService } from 'src/app/shared/services/school/school-class.service';
import { SchoolClassStatus } from 'src/app/shared/models/school/school-class-status';
import { SchoolClassTransport } from 'src/app/shared/models/school/transport/schoolclass-transport';

@Component({
  selector: 'app-school-class-configuration-modal',
  templateUrl: './school-class-configuration-modal.component.html',
  styleUrls: ['./school-class-configuration-modal.component.scss']
})
export class SchoolClassConfigurationModalComponent implements OnInit {

  schoolClassConfigurationForm: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<SchoolClassConfigurationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private schoolClassService: SchoolClassService) { }


  ngOnInit(): void {
    if (!this.data.schoolClass) {
      this.schoolClassConfigurationForm = this.fb.group({
        name: ['', Validators.required],
        status: [SchoolClassStatus.ACTIVE]
      })
    } else {
      this.schoolClassConfigurationForm = this.fb.group({
        name: [this.data.schoolClass.name, Validators.required],
        status: [this.data.schoolClass.classStatus, Validators.required],
      })
    }
  }

  get controls() {
    return this.schoolClassConfigurationForm.controls;
  }

  getSchoolClassStatus() {
    return Object.values(SchoolClassStatus);
  }

  submitForm() {
    if (this.data.schoolClass) {
      this.data.schoolClass.name = this.schoolClassConfigurationForm.get('name').value;
      this.data.schoolClass.status = this.schoolClassConfigurationForm.get('status').value;
      this.schoolClassService.updateSchoolClass(this.data.schoolClass, this.data.schoolClass.id).subscribe(resBody => {
        this.data = resBody;
        alert("Class " + resBody.name + " successfully updated");
        this.dialogRef.close();
      })
    } else {
      this.schoolClassService.createSchoolClass(
        new SchoolClassTransport(this.controls.name.value, this.controls.status.value, this.data.level.id)
      ).subscribe(resBody => {
        this.data.schoolClass = resBody;
        this.data.level.schoolClasses.push(resBody);
        alert("Class " + resBody.name + " successfully created");
        this.dialogRef.close();
      })
    }
  }

}
