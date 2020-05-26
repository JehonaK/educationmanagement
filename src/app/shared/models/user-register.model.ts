import { UserModel } from './user.model';

export class UserRegisterModel {
    firstName: string;
    lastName: string;
    role: UserModel;
    birthDate: Date;
    gender: string;
    email: string;
    password: string;
}