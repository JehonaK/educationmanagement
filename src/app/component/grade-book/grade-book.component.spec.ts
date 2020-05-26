import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeBookComponent } from './grade-book.component';

describe('GradeBookComponent', () => {
  let component: GradeBookComponent;
  let fixture: ComponentFixture<GradeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
