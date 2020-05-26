import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { SubjectModel } from '../models/subject.model';
import { ENDPOINTS } from '../constants/api.constants';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient,
    private restService: RestService) { }

  createSubject(subject: SubjectModel) {
    return this.http.post(ENDPOINTS.school.createSubject, subject);
  }

  updateSubject(subject: SubjectModel, id: string) {
    return this.http.put(ENDPOINTS.school.updateSubject + '/{id}', subject);
  }

  getSubjectById(id: string) {
    return this.http.get(ENDPOINTS.school.getSubjectById + '/{id}');
  }

  deleteSubjectById(id: string) {
    return this.http.delete(ENDPOINTS.school.deleteSubjectById + '/{id}');
  }

  assignTeacherToSubject(user: UserModel) {
    return this.http.put(ENDPOINTS.school.assignTeacherToSubject, user);
  }

  getStudentsByClassId(classId: string) {
    return this.http.get(ENDPOINTS.school.getStudentsByClassId + '/{classId}');
  }

}
