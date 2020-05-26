import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { NotificationModel } from '../models/notification.model';
import { ENDPOINTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient,
    private restService: RestService) { }

  updateNotificationReadStatus(notificationId: string, isRead: boolean) {
    return this.http.put(ENDPOINTS.notification.updateNotificationReadStatus + '/${notificationId}', isRead);
  }

  getNotificationsByUserId(userId: string) {
    return this.http.get(ENDPOINTS.notification.getNotificationsByUserId + '/{userId}');
  }

  deleteNotificationById(id: string) {
    return this.http.delete(ENDPOINTS.notification.deleteNotificationById + '/{id}');
  }

}
