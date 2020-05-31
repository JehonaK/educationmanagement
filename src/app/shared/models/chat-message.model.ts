import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class ChatMessageModel {
    id?: String;
    senderId: String;
    conversationId: String;
    content: String;
    timeSent: Date;
}