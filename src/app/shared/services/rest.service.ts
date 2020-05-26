import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpRequestMethod} from '../constants/http-request.method';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) {
  }

  /*
  * TODO: Request with token
  * */

  // request(method, url, parameters[body, url, etc]
  request<R>(method: HttpRequestMethod, url: string, options?: {
    params?: any
    body?: any
    headers?: any
  }) {
    return this.httpClient.request<R>(method, url, options);
  }

  /*
  * TODO: Request without token (public)
  * */

  // request(method, url, parameters[body, url, etc]
  publicRequest<R>(method: HttpRequestMethod, url: string, options?: {
    params?: any
    body?: any
    headers?: any
  }) {
    if (options && options.headers) {
      options.headers.X_SKIP_TOKEN = '';
    } else if (options && !options.headers) {
      options.headers = {X_SKIP_TOKEN: ''};
    } else {
      options = {
        headers: {
          X_SKIP_TOKEN: ''
        }
      };
    }
    return this.httpClient.request<R>(method, url, options);
  }
}
