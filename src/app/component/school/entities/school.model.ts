import { SchoolType } from './school-type.model';

export class SchoolModel {
    constructor(public name: string,
        public city: string,
        public address: string,
        public schoolType: String,
        public schoolCreationDate: Date,
        public schoolAdmin?) { }
}

export const SCHOOL: SchoolModel = new SchoolModel("Xhevdet Doda", "Prishtina", "Rr.Xhevdet Doda",
    SchoolType.PRIVATE, new Date(2003, 6, 15));