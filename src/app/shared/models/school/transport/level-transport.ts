import { SchoolClassModel } from '../school-class.model';

export class LevelTransport {
    constructor(public name: string,
        public schoolId: string, public schoolClasses: Array<SchoolClassModel>) { }

}