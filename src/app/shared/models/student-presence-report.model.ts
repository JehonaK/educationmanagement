import { StudentPresenceModel } from './student-presence.model';

export class StudentPresenceReportModel {
    studentPresences: Array<StudentPresenceModel>;
    dateAndTimeGenerated: Date; 
}