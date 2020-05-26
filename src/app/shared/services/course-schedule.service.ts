import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../constants/api.constants';
import { CourseScheduleModel } from '../models/course-schedule.model';

@Injectable({
  providedIn: 'root'
})
export class CourseScheduleService {

  constructor(private http: HttpClient,
    private restService: RestService) { }

  createCourseSchedule(courseSchedule: CourseScheduleModel) {
    return this.http.post(ENDPOINTS.schedule.createCourseSchedule, courseSchedule);
  }

  updateCourseSchedule(courseSchedule: CourseScheduleModel) {
    return this.http.put(ENDPOINTS.schedule.updateCourseSchedule, courseSchedule);
  }

  getCourseScheduleByCourseId(courseId: string) {
    return this.http.get(ENDPOINTS.schedule.getCourseScheduleByCourseId + '/{courseId}');
  }

  deleteCourseScheduleByCourseId(courseId: string) {
    return this.http.delete(ENDPOINTS.schedule.deleteCourseScheduleByCourseId + '/{courseId}');
  }

  setTimeFrameDescription(dtfiId: string, description: string) {
    return this.http.put(ENDPOINTS.schedule.setTimeFrameDescription + '/${dtfiId}', description);
  }
  
}
