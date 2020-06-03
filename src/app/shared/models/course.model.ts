import { TokenModel } from './token.model';
import { ActivityModel } from './activity.model';
import { ForumModel } from './forum.model';
import {LessonModel} from './lesson.model';
import {UserRegisterModel} from './user-register.model';

export class CourseModel {
    id: string;
    name: string;
    description: string;
    teacherId: UserRegisterModel;
    subjectId: string;
    activities: Array<ActivityModel>;
    forumPosts: Array<ForumModel>;
    students: Array<TokenModel>;
    lessons: Array<LessonModel>;
}
