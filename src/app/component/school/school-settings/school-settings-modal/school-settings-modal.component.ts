import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchoolType } from '../../../../shared/models/school/school-type.model';
import { formatDate } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolService } from 'src/app/shared/services/school/school.service';
import { SchoolModel } from 'src/app/shared/models/school/school.model';

@Component({
  selector: 'school-settings-modal',
  templateUrl: './school-settings-modal.component.html',
  styleUrls: ['./school-settings-modal.component.scss']
})
export class SchoolSettingsModalComponent implements OnInit {

  schoolForm: FormGroup;

  schoolTypes = SchoolType;

  school: SchoolModel;

  constructor(
    private dialogRef: MatDialogRef<SchoolSettingsModalComponent>,
    private formBuilder: FormBuilder,
    private schoolService: SchoolService,
    @Inject(MAT_DIALOG_DATA) public data: SchoolModel) {
    this.school = this.data;
  }

  get formControls() {
    return this.schoolForm.controls;
  }
  ngOnInit(): void {
    this.schoolForm = this.formBuilder.group({
      name: [this.school.name, Validators.required],
      city: [this.school.city, Validators.required],
      address: [this.school.address, Validators.required],
      type: [this.school.schoolType, Validators.required],
      date: [{
        value: formatDate(this.school.schoolCreationDate, 'yyyy-MM-dd', 'en'),
        disabled: true
      }, Validators.required],
    })
  }

  getSchoolTypes() {
    return Object.values(this.schoolTypes);
  }

  submitForm() {
    this.school.name = this.formControls.name.value;
    this.school.city = this.formControls.city.value;
    this.school.address = this.formControls.address.value;
    this.school.schoolType = this.formControls.type.value;
    this.school.schoolCreationDate = this.formControls.date.value;
    this.schoolService.updateSchool(this.school, this.school.id).subscribe(resBody => {
      alert("Successfully updated");
      this.dialogRef.close();
    })
    // this.schoolManagementService.updateSchool(this.school).subscribe( res =>{
    //   console.log(res)
    //   alert('suc')
    // })
  }

}
