import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseCurriculumModalComponent } from './edit-course-curriculum-modal.component';

describe('EditCourseCurriculumModalComponent', () => {
  let component: EditCourseCurriculumModalComponent;
  let fixture: ComponentFixture<EditCourseCurriculumModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourseCurriculumModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseCurriculumModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
