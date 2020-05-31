import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat.service';
import { ConversationModel } from 'src/app/shared/models/conversation.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-conversation-list',
  templateUrl: './chat-conversation-list.component.html',
  styleUrls: ['./chat-conversation-list.component.scss']
})
export class ChatConversaationListComponent implements OnInit {

  conversations: [ConversationModel]
  newConvoForm: FormGroup;

  constructor(private chatService: ChatService, private formBuilder: FormBuilder) {
    this.newConvoForm = this.formBuilder.group({
      email: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.chatService.getConversationByUserId("58fd62c1-0b58-456f-8c3b-21bdf5739d37").subscribe(res => {
      this.conversations = res;
    })
  }

  createConversation() {
    console.log(this.newConvoForm.controls.email.value);
    this.chatService.createConversation(this.newConvoForm.controls.email.value).subscribe(res => {
      console.log(res);
    })
  }

}
