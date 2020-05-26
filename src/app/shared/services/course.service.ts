import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { CourseModel } from '../models/course.model';
import { ENDPOINTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private http: HttpClient,
    private restService: RestService) { }

  updateCourse(course: CourseModel, id: string) {
    return this.http.put(ENDPOINTS.course.updateCourse + '/{id}', course);
  }

  getCourseById(id: string) {
    return this.http.get(ENDPOINTS.course.getCourseById + '/{id}');
  }

  deleteCourseById(id: string) {
    return this.http.delete(ENDPOINTS.course.deleteCourseById + '/{id}');
  }

  getCoursesByTeacherId(teacherId: string) {
    return this.http.get(ENDPOINTS.course.getCoursesByTeacherId + '/{teacherId}');
  }

  getCoursesByStudentId(studentId: string) {
    return this.http.get(ENDPOINTS.course.getCoursesByStudentId + '/{studentId}');
  }  

}
