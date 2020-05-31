import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentParentAssociationComponent } from './student-parent-association.component';

describe('StudentParentAssociationComponent', () => {
  let component: StudentParentAssociationComponent;
  let fixture: ComponentFixture<StudentParentAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentParentAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentParentAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
