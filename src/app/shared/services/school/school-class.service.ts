import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { SchoolClassModel } from '../../models/school/school-class.model';
import { ENDPOINTS } from '../../constants/api.constants';
import { UserModel } from '../../models/user.model';
import { Observable } from 'rxjs';
import { SchoolClassTransport } from '../../models/school/transport/schoolclass-transport';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService {

  constructor(private http: HttpClient,
    private restService: RestService) { }

  createSchoolClass(schoolClass: SchoolClassTransport): Observable<SchoolClassModel> {
    return this.http.post<SchoolClassModel>(ENDPOINTS.school.createClass, schoolClass);
  }

  updateSchoolClass(schoolClass: SchoolClassModel, id: string): Observable<SchoolClassModel> {
    return this.http.put<SchoolClassModel>(ENDPOINTS.school.updateClass + `/${id}`, schoolClass);
  }

  getSchoolClassById(id: string): Observable<SchoolClassModel> {
    return this.http.get<SchoolClassModel>(ENDPOINTS.school.getClassById + `/${id}`);
  }

  deleteSchoolClassById(id: string) {
    return this.http.delete(ENDPOINTS.school.deleteClassById + `/${id}`);
  }

  getClassByLevelId(levelId: string): Observable<SchoolClassModel[]> {
    return this.http.get<SchoolClassModel[]>(ENDPOINTS.school.getClassByLevelId, { params: { levelId: levelId } });
  }

  addStudentToClass(email: string, schoolClassId: string) {
    return this.http.post(ENDPOINTS.school.addStudentToClass, { email: email, schoolClassId: schoolClassId });
  }
}
