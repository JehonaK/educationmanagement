import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { ENDPOINTS } from '../constants/api.constants';
import { ForumModel } from '../models/forum.model';

@Injectable({
  providedIn: 'root'
})
export class ForumPostService {

  constructor( private http: HttpClient,
    private restService: RestService) { }

  createForumPost(forum: any) {
    return this.http.post<any>(ENDPOINTS.course.createForumPost, forum);
  }

  updateForumPost(forum: ForumModel, id: string) {
    return this.http.put(ENDPOINTS.course.updateForumPost + '/${id}', forum);
  }

  getForumPostById(id: string) {
    return this.http.get<ForumModel>(ENDPOINTS.course.getForumPostById + '/' + id);
  }

  deleteForumPostById(id: string) {
    return this.http.delete(ENDPOINTS.course.deleteForumPostById + '/${id}');
  }

  getForumPostsByCourseId(courseId: string) {
    return this.http.get<ForumModel[]>(ENDPOINTS.course.getForumPostsByCourseId, {
      params: {
        courseId: courseId
      }
    });
  }
}
