import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LevelService } from 'src/app/shared/services/school/level.service';
import { LevelTransport } from 'src/app/shared/models/school/transport/level-transport';
import { SchoolClassModel } from 'src/app/shared/models/school/school-class.model';
import { SchoolClassStatus } from 'src/app/shared/models/school/school-class-status';

@Component({
  selector: 'app-level-configuration-modal',
  templateUrl: './level-configuration-modal.component.html',
  styleUrls: ['./level-configuration-modal.component.scss']
})
export class LevelConfigurationModalComponent implements OnInit {

  levelCreationForm: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<LevelConfigurationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private levelService: LevelService) { }

  ngOnInit(): void {
    if (!this.data.level) {
      this.levelCreationForm = this.fb.group({
        name: ['', Validators.required],
        classesNumber: [''],
        classNaming: ['ALPHABETIC']
      })
    }
    else {
      this.levelCreationForm = this.fb.group({
        name: [this.data.level.name, Validators.required]
      })
    }
  }

  submitForm() {
    if (this.data.level) {
      const transport = new LevelTransport(this.levelCreationForm.get('name').value,localStorage.getItem('schoolId'),this.data.schoolClasses);
      this.levelService.updateLevel(transport, this.data.level.id).subscribe(resBody => {
        this.data.level.name = this.levelCreationForm.get('name').value;
        alert("Level updated successfully");
        this.dialogRef.close();
      });;

    } else {
      const transport = new LevelTransport(this.levelCreationForm.get('name').value,
        localStorage.getItem("schoolId"),
        this.generateClasses(this.levelCreationForm.get('classesNumber').value));
      this.levelService.createLevel(transport).subscribe(resBody => {
        this.data.levels.push(resBody);
        alert("Level " + resBody.name + " created successfully");
        this.dialogRef.close();
      });
    }
  }
  generateClasses(classesNumber: number) {
    const classes = [];
    if (this.levelCreationForm.get('classNaming').value == "ALPHABETIC") {
      for (let i = 65; i < classesNumber + 65; i++) {
        classes.push(new SchoolClassModel(null, String.fromCharCode(i), SchoolClassStatus.ACTIVE, null, []))
      }
      return classes;
    } else if (this.levelCreationForm.get('classNaming').value == "NUMERIC") {
      for (let i = 1; i <= classesNumber; i++) {
        classes.push(new SchoolClassModel(null, i + "", SchoolClassStatus.ACTIVE, null, []))
      }
    }
    return classes;
  }
}
