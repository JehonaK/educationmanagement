import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { ENDPOINTS } from '../constants/api.constants';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private http: HttpClient,
    private restService: RestService) { }

  createComment(comment: any) {
    return this.http.post<any>(ENDPOINTS.course.createComment, comment);
  }

  updateComment(comment: CommentModel, id: string) {
    return this.http.put(ENDPOINTS.course.updateComment + '/{id}', comment);
  }

  getCommentById(id: string) {
    return this.http.get<any>(ENDPOINTS.course.getCommentById + '/90d903d2-3edd-41dc-94d9-1106d9d7d373');
  }

  deleteCommentById(id: string) {
    return this.http.delete(ENDPOINTS.course.deleteCommentById + '/{id}');
  }

}
