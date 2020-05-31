import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatMessageModel } from 'src/app/shared/models/chat-message.model';
import { ChatService } from 'src/app/shared/services/chat.service';
import { SocketClientService } from 'src/app/shared/services/socket-client.service';
import { map, first } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-chat-conversation-box',
  templateUrl: './chat-conversation-box.component.html',
  styleUrls: ['./chat-conversation-box.component.scss']
})
export class ChatConversationBoxComponent implements OnInit, AfterViewChecked {

  messages: [ChatMessageModel];
  myId: string;
  loginForm: FormGroup;
  conversationId: string;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(private route: ActivatedRoute, private chatService: ChatService, private socketClientService: SocketClientService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      message: new FormControl('')
    });
  }

  ngOnInit(): void {
    //this.myId = localStorage.getItem("id");
    this.myId = "58fd62c1-0b58-456f-8c3b-21bdf5739d37";
    this.route.paramMap.subscribe(params => {
      this.conversationId = params.get('id');
      this.chatService.getMessagesByConversationId(this.conversationId).subscribe(res => {
        this.messages = res;
      })
    })
  }

  onMessageSubmit() {
    const message: ChatMessageModel = {
      senderId: this.myId,
      conversationId: this.conversationId,
      content: this.loginForm.controls.message.value,
      timeSent: new Date()
    }
    this.socketClientService.send(message);
    this.messages.push(message);
    this.scrollToBottom();
    this.loginForm.controls.message.setValue("");
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }

  scrollToBottom() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

}