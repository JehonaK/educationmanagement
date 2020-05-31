import { SubjectType } from './subject-type.model';

export class SchoolSubjectModel {
    constructor(public id: string,
        public name: string,
        public description: string,
        public levelId: string,
        public subjectType: SubjectType) { }
}

export const SUBJECTS: SchoolSubjectModel[] = [
    new SchoolSubjectModel("1", "Mathematics", "Numbers and stuff", "1", SubjectType.MANDATORY),
    new SchoolSubjectModel("2", "Biology", "Bigger numbers and stuff", "1", SubjectType.MANDATORY),
    new SchoolSubjectModel("3", "Chemistry", "Even bigger numbers and stuff", "1", SubjectType.MANDATORY)
]