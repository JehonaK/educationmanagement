import { StudentModel, STUDENTS } from './student.model';
import { SchoolClassStatus } from './school-class-status';



export class SchoolClassModel {
    constructor(
        public id: string,
        public name: string,
        public status: SchoolClassStatus,
        public levelId: string,
        public students: Array<StudentModel>
    ) { }
}

export const SCHOOL_CLASSES: SchoolClassModel[] = [
    new SchoolClassModel("1", "A", SchoolClassStatus.FINISHED, "1", STUDENTS),
    new SchoolClassModel("2", "B", SchoolClassStatus.FINISHED, "2", STUDENTS),
    new SchoolClassModel("3", "C", SchoolClassStatus.FINISHED, "3", STUDENTS)
]