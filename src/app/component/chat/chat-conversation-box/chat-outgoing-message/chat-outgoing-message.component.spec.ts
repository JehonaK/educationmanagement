import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatOutgoingMessageComponent } from './chat-outgoing-message.component';

describe('ChatOutgoingMessageComponent', () => {
  let component: ChatOutgoingMessageComponent;
  let fixture: ComponentFixture<ChatOutgoingMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatOutgoingMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatOutgoingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
