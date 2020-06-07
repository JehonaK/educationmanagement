import { Component, OnInit, ElementRef } from '@angular/core';
import { CalendarService } from '../../../shared/services/calendar/calendar.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { CalendarMonthService } from '../calendar-month/calendar-month.service';

@Component({
    selector: 'calendar-upload',
    template: `
    <form [formGroup]="calendarUploadForm" enctype="multipart/form-data">
    <label for='file'>Ngarko kalendarin</label>
    <input (change)="fileChange($event)"formControlName="file" name="file" type="file" accept='.csv, text/csv' name="file"/>
    <button class="button is-info-light" (click)="submitForm()" type="submit">Upload</button>
    </form>`

})
export class CalendarUploadComponent implements OnInit {

    constructor(private elRef: ElementRef, private calendarService: CalendarService, private calendarMonthService: CalendarMonthService) { }

    calendarUploadForm: FormGroup;

    file;

    ngOnInit() {
        this.calendarUploadForm = new FormGroup(
            {
                file: new FormControl()
            }
        );
    }

    submitForm() {
        const formData = new FormData()
        formData.append('file', this.file);
        this.calendarService.addEventsByFile(formData).subscribe(
            response => {
                this.calendarMonthService.changeEvents();
                this.elRef.nativeElement.hidden = true;
            }
        );
    }
    fileChange(event) {
        if (event.target.files.length > 0)
            this.file = event.target.files[0];
    }
}
