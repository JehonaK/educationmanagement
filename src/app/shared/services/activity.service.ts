import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../constants/api.constants';
import { ActivityModel } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor( private http: HttpClient,
    private restService: RestService) { }

  createActivity(activity: ActivityModel) {
    return this.http.post(ENDPOINTS.course.createActivity, activity);
  } 
    
  updateActivity(activity: ActivityModel, id: string) {
    return this.http.put(ENDPOINTS.course.updateActivity + '/${id}', activity);
  }

  getActivityById(id: string) {
    return this.http.get(ENDPOINTS.course.getActivityById + '/${id}');
  }

  deleteActivityById(id: string) {
    return this.http.delete(ENDPOINTS.course.deleteActivityById + '/${id}');
  }

  getActivitiesByCourseId(courseId: string) {
    return this.http.get(ENDPOINTS.course.getActivitiesByCourseId + '/${courseId}');
  }
  
}
