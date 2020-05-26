import { CommentModel } from './comment.model';

export class ForumModel {
    id: string;
    title: string;
    content: string;
    courseId: string;
    authorId: string;
    comments: Array<CommentModel>;
}