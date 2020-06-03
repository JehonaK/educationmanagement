import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy, Inject } from '@angular/core';

import { CalendarEvent } from '../../../shared/models/calendar/calendar-event.model';
import { ActivatedRoute } from '@angular/router';
import { CalendarMonthService } from '../calendar-month/calendar-month.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'calendar-day-modal',
    templateUrl: './calendar-day-modal.component.html',
    styleUrls: ['./calendar-day-modal.component.scss'],
})
export class CalendarDayModalComponent implements OnInit {

    date: Date;

    events: CalendarEvent[];


    constructor(private calendarMonthService: CalendarMonthService,
        public dialogRef: MatDialogRef<CalendarDayModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { date: Date }) {
    }

    ngOnInit(): void {
        this.date = this.data.date;
        this.events = this.calendarMonthService.getEvents(this.date.getDate());
    }
}