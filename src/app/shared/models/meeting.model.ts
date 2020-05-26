export class MeetingModel {
    id: string;
    title: string;
    startTime: Date;
    endTime: Date;
    place: string;
    description: string;
    online: boolean;
    meetingStatus: string;
    createdBy: string;
    invitedUser: string;
    comment: string;
    messageStartId: string;
    messageEndId: string;
}