import { Component, OnInit, Input } from '@angular/core';
import { ConversationModel } from 'src/app/shared/models/conversation.model';

@Component({
  selector: 'app-chat-contact-message',
  templateUrl: './chat-contact-message.component.html',
  styleUrls: ['./chat-contact-message.component.scss']
})
export class ChatContactMessageComponent implements OnInit {

  @Input() conversation: ConversationModel

  constructor() { }

  ngOnInit(): void {
  }

}
