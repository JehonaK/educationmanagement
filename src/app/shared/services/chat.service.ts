import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestService } from './rest.service';
import { ENDPOINTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient,
              private restService: RestService) { }

  getConversationByUserId(userId: string) {
    return this.http.get<any>(ENDPOINTS.chat.getConversationsByUserId);
  }

  getMessagesByConversationId(conversationId: string) {
    return this.http.get<any>(ENDPOINTS.chat.getMessagesByConversationId + "/" + conversationId);
  }

  createConversation(email: string) {
    return this.http.post<any>(ENDPOINTS.chat.createConversation, { params: {
      email
    }});
  }
  
}
