import { Component, OnInit, Input } from '@angular/core';
import { ChatMessageModel } from 'src/app/shared/models/chat-message.model';

@Component({
  selector: 'app-chat-incoming-message',
  templateUrl: './chat-incoming-message.component.html',
  styleUrls: ['./chat-incoming-message.component.scss']
})
export class ChatIncomingMessageComponent implements OnInit {

  @Input() message: ChatMessageModel

  constructor() { }

  ngOnInit(): void {
  }

}
