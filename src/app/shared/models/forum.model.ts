import { CommentModel } from './comment.model';
import {UserRegisterModel} from './user-register.model';
import {CourseModel} from './course.model';
import {Timestamp} from 'rxjs';

export class ForumModel {
    id: string;
    title: string;
    content: string;
    courseId: CourseModel;
    authorId: UserRegisterModel;
    comments: Array<CommentModel>;
    createDateTime: Timestamp<Date>;
}
