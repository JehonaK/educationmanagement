import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../constants/api.constants';
import { UserModel } from '../../models/user.model';
import { SchoolSubjectModel } from '../../models/school/school-subject.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolSubjectService {

  constructor(private http: HttpClient,
    private restService: RestService) { }

  createSubject(subject: SchoolSubjectModel): Observable<SchoolSubjectModel> {
    return this.http.post<SchoolSubjectModel>(ENDPOINTS.school.createSubject, subject);
  }

  updateSubject(subject: SchoolSubjectModel, id: string): Observable<SchoolSubjectModel> {
    return this.http.put<SchoolSubjectModel>(ENDPOINTS.school.updateSubject + `/${id}`, subject);
  }

  getSubjectById(id: string): Observable<SchoolSubjectModel> {
    return this.http.get<SchoolSubjectModel>(ENDPOINTS.school.getSubjectById + `/${id}`);
  }

  deleteSubjectById(id: string) {
    return this.http.delete(ENDPOINTS.school.deleteSubjectById + `/${id}`);
  }

  assignTeacherToSubject(email: string, subjectId: string, classes: string[]) {
    return this.http.put(ENDPOINTS.school.assignTeacherToSubject,
      { email: email, subjectId: subjectId, schoolClassIdList: classes });
  }

  getSubjectsByLevelId(levelId: string): Observable<SchoolSubjectModel[]> {
    return this.http.get<SchoolSubjectModel[]>(ENDPOINTS.school.getSubjectByLevelId, { params: { levelId: levelId } })
  }

  // getStudentsByClassId(classId: string) {
  //   return this.http.get(ENDPOINTS.school.getStudentsByClassId + '/{classId}');
  // }

}
