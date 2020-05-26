import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestService} from './rest.service';
import {HttpRequestMethod} from '../constants/http-request.method';
import {LocalStorageKey} from '../constants/local-storage-key';
import {map} from 'rxjs/operators';
import {ENDPOINTS} from '../constants/api.constants';
import {BaseStorageService} from './base-storage.service';
import {Router} from '@angular/router';
import { UserModel } from '../models/user.model';

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
    return this.httpClient.post<any>(ENDPOINTS.auth.login,  {email, password}, {observe: 'response'});
  }

  register(payload: any) {
    return this.httpClient.post<any>(ENDPOINTS.user.register, payload);
  }
}
