import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { SchoolClassModel } from '../models/school-class.model';
import { ENDPOINTS } from '../constants/api.constants';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService {

  constructor( private http: HttpClient,
    private restService: RestService) { }
  
  createSchoolClass(schoolClass: SchoolClassModel) {
    return this.http.post(ENDPOINTS.school.createClass, schoolClass);
  }
  
  updateSchoolClass(schoolClass: SchoolClassModel, id: string) {
    return this.http.put(ENDPOINTS.school.updateClass + '/{id}', schoolClass);
  }
  
  getSchoolClassById(id: string) {
    return this.http.get(ENDPOINTS.school.getClassById + '/{id}');
  }

  deleteSchoolClassById(id: string) {
    return this.http.delete(ENDPOINTS.school.deleteClassById + '/{id}');
  }

  getClassByLevelId(levelId: string) {
    return this.http.get(ENDPOINTS.school.getClassByLevelId + '/{levelId}');
  }

  addStudentToClass(user: UserModel) {
    return this.http.post(ENDPOINTS.school.addStudentToClass, user);
  }
}
