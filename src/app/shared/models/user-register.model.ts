import { UserModel } from './user.model';

export class UserRegisterModel {
    constructor(
        public firstName?: string,
        public lastName?: string,
        public role?: string,
        public birthDate?: Date,
        public gender?: string,
        public email?: string,
        public password?: string, ) { }
}
