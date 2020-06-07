import { TokenModel } from './token.model';
import { ActivityModel } from './activity.model';
import { ForumModel } from './forum.model';
import { LessonModel } from './lesson.model';
import { UserRegisterModel } from './user-register.model';

export class CourseModel {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public teacherId: UserRegisterModel,
        public subjectId: string,
        public activities: Array<ActivityModel>,
        public forumPosts: Array<ForumModel>,
        public students: Array<TokenModel>,
        public lessons: Array<LessonModel>,
    ) { }
}

export const COURSE: CourseModel = new CourseModel("1", "Matematika", "përbën një fushë të njohurive abstrakte të ndërtuara me ndihmën e arsyetimeve logjike mbi koncepte të tilla si numrat, figurat, strukturat dhe transformimet.", new UserRegisterModel("Filan",
    "Fisteki", "TEACHER", new Date(), "Male", "teacheremail@gmail.com", "teacherpassword"), "1", [], [], [], []);
