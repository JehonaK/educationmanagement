import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-level-creation-modal',
  templateUrl: './level-creation-modal.component.html',
  styleUrls: ['./level-creation-modal.component.scss']
})
export class LevelCreationModalComponent implements OnInit {

  levelCreationForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.levelCreationForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  submitForm() {
    alert('submitted');
  }

}
