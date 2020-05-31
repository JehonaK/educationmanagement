import { SchoolType } from './school-type.model';

export class SchoolModel {
    constructor(
        public id: string,
        public name: string,
        public address: string,
        public city: string,
        public schoolType: SchoolType,
        public schoolCreationDate: Date,
        public schoolAdminId: string) { }
}

export const SCHOOL: SchoolModel = new SchoolModel("123", "Xhevdet Doda", "Prishtina", "Rr.Xhevdet Doda",
    SchoolType.PRIVATE, new Date(2003, 6, 15), "123");