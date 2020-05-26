import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { LevelModel } from '../models/level.model';
import { ENDPOINTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient,
              private restService: RestService) { }

  createLevel(level: LevelModel) {
    return this.http.post(ENDPOINTS.school.createLevel, level);
  }

  updateLevel(level: LevelModel, id: string) {
    return this.http.put(ENDPOINTS.school.updateLevel + '/{id}', level);
  }

  getLevelById(id: string) {
    return this.http.get(ENDPOINTS.school.getLevelById + '/{id}');
  }

  deleteLevelById(id: string) {
    return this.http.delete(ENDPOINTS.school.deleteLevelById + '/{id}');
  }

  getLevelsBySchoolId(schoolId: string) {
    return this.http.get(ENDPOINTS.school.getLevelsBySchoolId);
  }

}
