import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSubjectConfigurationModalComponent } from './school-subject-configuration-modal.component';

describe('SchoolSubjectConfigurationModalComponent', () => {
  let component: SchoolSubjectConfigurationModalComponent;
  let fixture: ComponentFixture<SchoolSubjectConfigurationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSubjectConfigurationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSubjectConfigurationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
