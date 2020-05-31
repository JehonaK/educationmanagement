import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LevelService } from './node_modules/src/app/shared/services/school/level.service';
import { LevelModel } from './node_modules/src/app/shared/models/school/level.model';

@Component({
  selector: 'app-level-creation-modal',
  templateUrl: './level-creation-modal.component.html',
  styleUrls: ['./level-creation-modal.component.scss']
})
export class LevelCreationModalComponent implements OnInit {

  levelCreationForm: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<LevelCreationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: LevelModel,
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
    if (this.data) {
      this.data.name = this.levelCreationForm.get('name').value;
      this.levelService.updateLevel(this.data, this.data.id);
    }
  }

}
