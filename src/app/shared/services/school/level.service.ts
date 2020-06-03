import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { LevelModel } from '../../models/school/level.model';
import { ENDPOINTS } from '../../constants/api.constants';
import { Observable } from 'rxjs';
import { LevelTransport } from '../../models/school/transport/level-transport';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) { }

  createLevel(level: LevelTransport): Observable<LevelModel> {
    return this.http.post<LevelModel>(ENDPOINTS.school.createLevel, level);
  }

  updateLevel(level: LevelTransport, id: string): Observable<LevelModel> {
    return this.http.put<LevelModel>(ENDPOINTS.school.updateLevel + `/${id}`, level);
  }

  getLevelById(id: string): Observable<LevelModel> {
    return this.http.get<LevelModel>(ENDPOINTS.school.getLevelById + `/${id}`);
  }

  deleteLevelById(id: string) {
    return this.http.delete(ENDPOINTS.school.deleteLevelById + `/${id}`);
  }

  getLevelsBySchoolId(schoolId: string): Observable<LevelModel[]> {
    return this.http.get<LevelModel[]>(ENDPOINTS.school.getLevelsBySchoolId, { params: { schoolId: schoolId } });
  }

}
