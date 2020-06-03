import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { CourseModel } from '../models/course.model';
import { ENDPOINTS } from '../constants/api.constants';
import {LessonModel} from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private http: HttpClient, private restService: RestService) { }

  updateCourse(course: CourseModel, id: string) {
    return this.http.put(ENDPOINTS.course.updateCourse + '/{id}', course);
  }

  getCourseById(id: string) {
    return this.http.get<CourseModel>(ENDPOINTS.course.getCourseById + '/' + id);
  }

  deleteCourseById(id: string) {
    return this.http.delete(ENDPOINTS.course.deleteCourseById + '/{id}');
  }

  getCoursesByTeacherId() {
    return this.http.get<any>(ENDPOINTS.course.getCoursesByTeacherId);
  }

  getCoursesByStudentId() {
    return this.http.get<any>(ENDPOINTS.course.getCoursesByStudentId);
  }

  updateLesson(lesson: LessonModel, id: string) {
    return this.http.put(ENDPOINTS.course.updateLesson + '/{id}', lesson);
  }

  getLessonById(id: string) {
    return this.http.get<CourseModel>(ENDPOINTS.course.getLessonById + '/' + id);
  }

  deleteLessonById(id: string) {
    return this.http.delete(ENDPOINTS.course.deleteLessonById + '/' + id);
  }

  getLessonsByCourseId(id: string) {
    return this.http.get<any>(ENDPOINTS.course.getLessonsByCourseId + '/' + id);
  }
}
