import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../constants/api.constants';
import { StudentPresenceModel } from '../models/student-presence.model';
import { TeacherPresenceModel } from '../models/teacher-presence.model';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  constructor(private http: HttpClient,
    private restService: RestService) { }

  createStudentPresence(studentPresence: StudentPresenceModel) {
    return this.http.post(ENDPOINTS.schedule.createStudentPresence, studentPresence);
  }

  createTeacherPresence(teacherPresence: TeacherPresenceModel) {
    return this.http.post(ENDPOINTS.schedule.createTeacherPresence, teacherPresence);
  }

  updateStudentPresence(studentPresence: StudentPresenceModel) {
    return this.http.put(ENDPOINTS.schedule.updateStudentPresence, studentPresence);
  }

  getCourseScheduleByCourseId(courseId: string) {
    return this.http.get(ENDPOINTS.schedule.getCourseScheduleByCourseId + '/{courseId}');
  }

  getPresenceReportByTeacherId(teacherId: string) {
    return this.http.get(ENDPOINTS.schedule.getPresenceReportByTeacherId + '/${teacherId}');
  }

  getPresenceReportByStudentId(studentId: string) {
    return this.http.get(ENDPOINTS.schedule.getPresenceReportByStudentId + '/${studentId}');
  }

}
