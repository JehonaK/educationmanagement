import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatContactMessageComponent } from './chat-contact-message.component';

describe('ChatContactMessageComponent', () => {
  let component: ChatContactMessageComponent;
  let fixture: ComponentFixture<ChatContactMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatContactMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatContactMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
