import { ChatMessageModel } from './chat-message.model';
import { UserModel } from './user.model';

export class ConversationModel {
    id: string;
    dateCreated: Date;
    lastMessage: Array<ChatMessageModel>;
    participantName: String;
}