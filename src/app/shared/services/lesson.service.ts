import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { ENDPOINTS } from '../constants/api.constants';
import { LessonModel } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor( private http: HttpClient,
               private restService: RestService) { }

  createLesson(lesson: LessonModel) {
    return this.http.post(ENDPOINTS.course.createLesson, lesson);
  }

  updateLesson(lesson: LessonModel, id: string) {
    return this.http.put(ENDPOINTS.course.updateLesson + '/' + id, lesson);
  }

  getLessonById(id: string) {
    return this.http.get(ENDPOINTS.course.getLessonById + '/' + id);
  }

  deleteLessonById(id: string) {
    return this.http.delete(ENDPOINTS.course.deleteLessonById + '/' + id);
  }

  getLessonsByCourseId(courseId: string) {
    return this.http.get<LessonModel[]>(ENDPOINTS.course.getLessonsByCourseId + '/' + courseId);
  }
}
