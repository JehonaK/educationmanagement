import { SchoolClassStatus } from '../school-class-status';

export class SchoolClassTransport {
    constructor(public name: string, public classStatus: SchoolClassStatus, public levelId: string){}
}