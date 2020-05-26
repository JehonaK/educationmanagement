import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../constants/api.constants';
import { SchoolScheduleModel } from '../models/school-schedule.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolScheduleService {

  constructor(private http: HttpClient,
              private restService: RestService) { }

  createSchoolSchedule(schoolSchedule: SchoolScheduleModel) {
    return this.http.post(ENDPOINTS.schedule.createSchoolSchedule, schoolSchedule);
  }

  updateSchoolSchedule(schoolSchedule: SchoolScheduleModel) {
    return this.http.put(ENDPOINTS.schedule.updateSchoolSchedule, schoolSchedule);
  }

  getSchoolScheduleBySchoolId(schoolId: string) {
    return this.http.get(ENDPOINTS.schedule.getSchoolScheduleBySchoolId + '/{schoolId}');
  }

  deleteSchoolScheduleBySchoolId(schoolId: string) {
    return this.http.delete(ENDPOINTS.schedule.deleteSchoolScheduleBySchoolId + '/{schoolId}');
  }
}
