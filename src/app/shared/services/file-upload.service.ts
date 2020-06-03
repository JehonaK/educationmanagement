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

  createFileUpload(fileUpload: FileUploadModel) {
    return this.http.post(ENDPOINTS.course.createFileUpload, fileUpload);
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
