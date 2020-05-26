import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIncomingMessageComponent } from './chat-incoming-message.component';

describe('ChatIncomingMessageComponent', () => {
  let component: ChatIncomingMessageComponent;
  let fixture: ComponentFixture<ChatIncomingMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatIncomingMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatIncomingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
