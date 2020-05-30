import { StudentModel, STUDENTS } from './student.model';
import { ClassStatus } from './class-status';

export class SchoolClassModel {
    constructor(
        public id: string,
        public name: string,
        public classStatus: ClassStatus,
        public levelId: string,
        public students: Array<StudentModel>
    ) { }
}

export const SCHOOL_CLASSES: SchoolClassModel[] = [
    new SchoolClassModel("1", "A", ClassStatus.FINISHED, "1", STUDENTS),
    new SchoolClassModel("2", "B", ClassStatus.FINISHED, "2", STUDENTS),
    new SchoolClassModel("3", "C", ClassStatus.FINISHED, "3", STUDENTS)
]