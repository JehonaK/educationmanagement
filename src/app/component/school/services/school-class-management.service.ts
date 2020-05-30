import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class SubjectClassManagementService {

    constructor(private http: HttpClient) {

    }
    public getLevels() {
        return this.http.get<any>("ip");
    }
}