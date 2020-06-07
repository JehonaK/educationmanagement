import { SchoolClassModel, SCHOOL_CLASSES } from './school-class.model';
import { SchoolSubjectModel, SUBJECTS } from './school-subject.model';

export class LevelModel {
    constructor(
        public id: string,
        public name: string,
        public schoolId: string,
        public schoolClasses: Array<SchoolClassModel>,
        public subjects: Array<SchoolSubjectModel>
    ) { }
}

export const LEVEL: LevelModel = new LevelModel("1,", "E Dhjeta", "1", SCHOOL_CLASSES, SUBJECTS);

export const LEVELS: LevelModel[] = [LEVEL, new LevelModel("1", "E Njëmbëdhjeta", "1", SCHOOL_CLASSES, SUBJECTS),
    new LevelModel("2", "E Dymbëdhjeta", "1", SCHOOL_CLASSES, SUBJECTS)];
    // new LevelModel("3", "E katërt", "1", SCHOOL_CLASSES, SUBJECTS)];