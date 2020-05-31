import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LevelService } from 'src/app/shared/services/school/level.service';
import { LevelModel } from 'src/app/shared/models/school/level.model';

@Component({
  selector: 'app-level-configuration-modal',
  templateUrl: './level-configuration-modal.component.html',
  styleUrls: ['./level-configuration-modal.component.scss']
})
export class LevelConfigurationModalComponent implements OnInit {

  levelCreationForm: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<LevelConfigurationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LevelModel,
    private levelService: LevelService) { }

  ngOnInit(): void {
    if (!this.data) {
      this.levelCreationForm = this.fb.group({
        name: ['', Validators.required]
      })
    }
    else {
      this.levelCreationForm = this.fb.group({
        name: [this.data.name, Validators.required]
      })
    }
  }

  submitForm() {
    this.data.name = this.levelCreationForm.get('name').value;
    if (this.data) {
      this.levelService.updateLevel(this.data, this.data.id).subscribe(resBody => {
        this.data = resBody;
        alert("Level " + this.data.name + " updated successfully");
        this.dialogRef.close();
      });;

    } else {
      this.levelService.createLevel(this.data).subscribe(resBody => {
        this.data = resBody;
        alert("Level " + this.data.name + " created successfully");
        this.dialogRef.close();
      });
    }
  }

}
