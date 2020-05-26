import { TeacherPresenceModel } from './teacher-presence.model';

export class TeacherPresenceReportModel {
    teacherPresences: Array<TeacherPresenceModel>;
    dateAndTimeGenerated: Date;
}