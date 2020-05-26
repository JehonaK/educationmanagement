import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestService} from './rest.service';
import {HttpRequestMethod} from '../constants/http-request.method';
import {LocalStorageKey} from '../constants/local-storage-key';
import {map} from 'rxjs/operators';
import {ENDPOINTS} from '../constants/api.constants';
import {BaseStorageService} from './base-storage.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private restService: RestService,
    private baseStorage: BaseStorageService,
  ) {
  }

  login(email: string, password: string) {
    return this.restService.publicRequest<any>(HttpRequestMethod.POST, ENDPOINTS.auth.login, {
      body: {
        email,
        password
      }
    }).pipe(map(user => {
      if (user) {
        if (user.accessToken) {
          this.baseStorage.setStorage(LocalStorageKey.ACCESS_TOKEN, user.accessToken, true);
        }
        if (user.customerId) {
          this.baseStorage.setStorage(LocalStorageKey.USER_ID, user.customerId, true);
        }
      }

      return user;
    }));
  }

  register(payload: any) {
    return this.httpClient.post<any>(ENDPOINTS.user.register, payload);
  }
}
