import { SchoolClassModel } from './school-class.model';
import { SubjectModel } from './subject.model';

export class LevelModel {
    id: string;
    name: string;
    schoolId: string;
    schoolClasses: Array<SchoolClassModel>;
    subjects: Array<SubjectModel>;
}