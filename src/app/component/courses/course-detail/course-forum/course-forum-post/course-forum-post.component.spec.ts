import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseForumPostComponent } from './course-forum-post.component';

describe('CourseForumPostComponent', () => {
  let component: CourseForumPostComponent;
  let fixture: ComponentFixture<CourseForumPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseForumPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseForumPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
