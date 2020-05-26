import { UserRegisterModel } from './user-register.model';

export class SchoolClassModel {
    id: string;
    name: string;
    classStatus: string;
    levelId: string;
    students: Array<UserRegisterModel>;
}