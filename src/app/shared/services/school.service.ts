import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { SchoolModel } from '../models/school.model';
import { ENDPOINTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor( private http: HttpClient,
               private restService: RestService) { }

  createSchool(school: SchoolModel) {
    return this.http.post(ENDPOINTS.school.createSchool, school);
  }

  updateSchool(school: SchoolModel, id: string) {
    return this.http.put(ENDPOINTS.school.updateSchool + '/{id}', school);
  }

  getSchoolById(id: string) {
    return this.http.get(ENDPOINTS.school.getSchoolById + '/{id}');
  }

  deleteSchoolById(id: string) {
    return this.http.delete(ENDPOINTS.school.deleteSchoolById + '/{id}');
  }

  getSchoolByAdmin(schoolAdminId: string) {
    return this.http.get(ENDPOINTS.school.getSchoolByAdmin + '/{schoolAdminId}');
  }

}
