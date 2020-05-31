import { Component, OnInit, Input } from '@angular/core';
import { ChatMessageModel } from 'src/app/shared/models/chat-message.model';

@Component({
  selector: 'app-chat-outgoing-message',
  templateUrl: './chat-outgoing-message.component.html',
  styleUrls: ['./chat-outgoing-message.component.scss']
})
export class ChatOutgoingMessageComponent implements OnInit {

  @Input() message: ChatMessageModel

  constructor() { }

  ngOnInit(): void {
  }

}
