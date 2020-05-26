import { StudentPresenceModel } from './student-presence.model';

export class ClassPresenceModel {
    dtfiId: string;
    studentPresence: Array<StudentPresenceModel>;
}