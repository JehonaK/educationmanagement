import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassStudentInsertionModalComponent } from './school-class-student-insertion-modal.component';

describe('SchoolClassStudentInsertionModalComponent', () => {
  let component: SchoolClassStudentInsertionModalComponent;
  let fixture: ComponentFixture<SchoolClassStudentInsertionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolClassStudentInsertionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassStudentInsertionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
