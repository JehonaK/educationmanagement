import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatConversaationListComponent } from './chat-conversation-list.component';

describe('ChatConversaationListComponent', () => {
  let component: ChatConversaationListComponent;
  let fixture: ComponentFixture<ChatConversaationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatConversaationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatConversaationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});