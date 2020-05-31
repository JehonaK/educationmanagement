import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SchoolModel } from 'src/app/shared/models/school/school.model';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class SchoolManagementService {
    private ip = "http://192.168.0.138:8662"

    constructor(private http: HttpClient) {

    }

    getSchool() {
        return this.http.get<any>(this.ip + "/school/school", {
            params: {
                schoolAdminId: ""
            }
        })
    }

    getLevels() {
        return this.http.get<any>(this.ip + "/school/level",
            {
                params: {
                    schoolId: localStorage.getItem("schoolId")
                }
            });
    }

    getLevelById(levelId) {
        return this.http.get<any>(this.ip + "/school/level/" + levelId);
    }

    getSchoolClassesByLevelId(levelId) {
        return this.http.get<any>(this.ip + "/school/schoolClass", { params: { levelId: levelId } });

    }

    getSchoolSubjectsByLevelId(levelId) {
        return this.http.get<any>(this.ip + "/school/subject", { params: { levelId: levelId } });

    }

    // getClasses() {
    //     return this.http.get<any>(this.ip + "/school/schoolClass",
    //         {
    //             params: {
    //                 schoolId: localStorage.getItem("schoolId")
    //             }
    //         });
    // }

    getClassById(classId: string) {
        return this.http.get<any>(this.ip + '/school/schoolClass/' + classId);
    }

    updateSchool(school: SchoolModel) {
        delete(school.schoolAdminId);
        return this.http.put<any>(this.ip + "/school/school/" + localStorage.getItem('schoolId'), school)
    }
}