import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseForumListComponent } from './course-forum-list.component';

describe('CourseForumListComponent', () => {
  let component: CourseForumListComponent;
  let fixture: ComponentFixture<CourseForumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseForumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseForumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
