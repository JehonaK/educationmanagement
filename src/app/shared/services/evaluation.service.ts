import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../constants/api.constants';
import { EvaluationModel } from '../models/evaluation.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor( private http: HttpClient,
    private restService: RestService) { }

  createEvaluation(evaluation: EvaluationModel) {
    return this.http.post(ENDPOINTS.course.createEvaluation, evaluation);
  } 
    
  updateEvaluation(evaluation: EvaluationModel, id: string) {
    return this.http.put(ENDPOINTS.course.updateEvaluation + '/{id}', evaluation);
  }

  getEvaluationById(id: string) {
    return this.http.get(ENDPOINTS.course.getEvaluationById + '/{id}');
  }

  deleteEvaluationById(id: string) {
    return this.http.delete(ENDPOINTS.course.deleteEvaluationById + '/{id}');
  }

  getEvaluationByStudentIdAndCourseId(studentId: string, courseId: string) {
    return this.http.get(ENDPOINTS.course.getEvaluationByStudentIdAndCourseId + '/{studentId}' + '/{courseId}');
  }
  
}
