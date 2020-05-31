import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatConversationBoxComponent } from './chat-conversation-box.component';

describe('ChatConversationBoxComponent', () => {
  let component: ChatConversationBoxComponent;
  let fixture: ComponentFixture<ChatConversationBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatConversationBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatConversationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});