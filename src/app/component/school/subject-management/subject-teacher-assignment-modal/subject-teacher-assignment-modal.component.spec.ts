import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTeacherAssignmentModalComponent } from './subject-teacher-assignment-modal.component';

describe('SubjectTeacherAssignmentModalComponent', () => {
  let component: SubjectTeacherAssignmentModalComponent;
  let fixture: ComponentFixture<SubjectTeacherAssignmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectTeacherAssignmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTeacherAssignmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
