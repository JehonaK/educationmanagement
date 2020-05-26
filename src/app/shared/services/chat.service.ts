import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { ENDPOINTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient,
              private restService: RestService) { }

  getConversationByUserId(userId: string) {
    return this.http.get(ENDPOINTS.chat.getConversationsByUserId + '/${userId}');
  }

  getMessagesByConversationId(conversationId: string) {
    return this.http.get(ENDPOINTS.chat.getMessagesByConversationId + '/${conversationId}');
  }
  
}
