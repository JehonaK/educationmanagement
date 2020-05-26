import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { ENDPOINTS } from '../constants/api.constants';
import { MeetingModel } from '../models/meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient,
            private restService: RestService) { }

  createMeeting(meeting: MeetingModel) {
    return this.http.post(ENDPOINTS.meetings.createMeeting, meeting);
  }

  updateMeeting(meeting: MeetingModel, id: string) {
    return this.http.put(ENDPOINTS.meetings.updateMeeting + '/{id}', meeting);
  }

  getMeetingById(id: string) {
    return this.http.get(ENDPOINTS.meetings.getMeetingById + '/{id}');
  }

  getMeetingsByUserId() {
    return this.http.get(ENDPOINTS.meetings.getMeetingByUserId);
  }

  deleteMeetingById(meetingId: string) {
    return this.http.delete(ENDPOINTS.meetings.deleteMeetingById + '/{meetingId}');
  }

  addCommentToMeeting(meeting: MeetingModel, meetingId: string) {
    return this.http.put(ENDPOINTS.meetings.addMeetingComment + '/${meetingId}' + '/comment', meeting);
  }

}
