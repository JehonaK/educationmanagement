import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { ENDPOINTS } from '../constants/api.constants';
import { FileUploadModel } from '../models/file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor( private http: HttpClient,
               private restService: RestService) { }

  createFileUpload(fileUpload: File, activityId: string) {
    const formData: FormData = new FormData();
    formData.append('file', fileUpload);
    return this.http.post('http://localhost:8080/upload/activity', formData, {
      params: {
        activityId: activityId,
      }
    });
  }

  createFileUploadForLesson(fileUpload: File, lessonId: string) {
    const formData: FormData = new FormData();
    formData.append('file', fileUpload);
    return this.http.post('http://localhost:8080/upload/lesson', formData, {
      params: {
        lessonId: lessonId,
      }
    });
  }

  getFileUploadById(id: string) {
    return this.http.get(ENDPOINTS.course.getFileUploadById+ '/{id}');
  }

  deleteFileUploadById(id: string) {
    return this.http.delete(ENDPOINTS.course.deleteFileUploadById + '/{id}');
  }

  getFileUploadsByActivityId(id: string) {
    return this.http.get<any>(ENDPOINTS.course.getFileUploadsByActivityId, {
      params: {
        activityId: id
      }
    });
  }

  getFileUploadsByLessonId(id: string) {
    return this.http.get<FileUploadModel[]>(ENDPOINTS.course.getFileUploadsByLessonId, {
      params: {
        lessonId: id
      }
    });
  }
}
