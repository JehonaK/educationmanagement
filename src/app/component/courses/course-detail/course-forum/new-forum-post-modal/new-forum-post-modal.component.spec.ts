import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForumPostModalComponent } from './new-forum-post-modal.component';

describe('NewForumPostModalComponent', () => {
  let component: NewForumPostModalComponent;
  let fixture: ComponentFixture<NewForumPostModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewForumPostModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForumPostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
