import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { SchoolModel } from '../../models/school/school.model';
import { ENDPOINTS } from '../../constants/api.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient,
    private restService: RestService) { }

  createSchool(school: SchoolModel): Observable<SchoolModel> {
    return this.http.post<SchoolModel>(ENDPOINTS.school.createSchool, school);
  }

  updateSchool(school: SchoolModel, id: string): Observable<SchoolModel> {
    delete((school as any).schoolAdmin);
    return this.http.put<SchoolModel>(ENDPOINTS.school.updateSchool + `/${id}`, school);
  }

  getSchoolById(id: string): Observable<SchoolModel> {
    return this.http.get<SchoolModel>(ENDPOINTS.school.getSchoolById + `/${id}`);
  }

  deleteSchoolById(id: string) {
    return this.http.delete(ENDPOINTS.school.deleteSchoolById + `/${id}`);
  }

  getSchoolByAdmin(schoolAdminId: string): Observable<SchoolModel> {
    return this.http.get<SchoolModel>(ENDPOINTS.school.getSchoolByAdmin, { params: { schoolAdminId: schoolAdminId } });
  }

}
