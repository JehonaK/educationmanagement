import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseActivitiesComponent } from './course-activities.component';

describe('CourseActivitiesComponent', () => {
  let component: CourseActivitiesComponent;
  let fixture: ComponentFixture<CourseActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
