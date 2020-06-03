import {UserRegisterModel} from './user-register.model';
import {Timestamp} from 'rxjs';

export class CommentModel {
    id: string;
    content: string;
    postId: string;
    authorId: UserRegisterModel;
    createDateTime: Timestamp<Date>;
}
