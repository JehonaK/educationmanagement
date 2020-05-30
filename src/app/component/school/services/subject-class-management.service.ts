export class SubjectClassExternalService
 {
    
    
}import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class SchoolClassManagementService {

    constructor(private http: HttpClient) {

    }
    public getLevels() {
        return this.http.get<any>("192.168.0.138");
    }
}