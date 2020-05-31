import { Injectable } from '@angular/core';
import { SchoolSettingsComponent } from './school-settings.component';

@Injectable({
    providedIn: 'root'
})
export class SchoolSettingsService{
    private schoolSettings: SchoolSettingsComponent;

    getSchool(){
        return this.schoolSettings.school;
    }
}