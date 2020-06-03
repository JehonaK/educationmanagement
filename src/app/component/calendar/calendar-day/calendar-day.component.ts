import { Component, Input, OnInit } from '@angular/core';

import { CalendarEvent } from '../../../shared/models/calendar/calendar-event.model';
import { CalendarDayModalComponent } from '../calendar-modal/calendar-day-modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'calendar-day',
    templateUrl: './calendar-day.component.html',
    styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {

    @Input()
    date: Date;

    @Input()
    events: CalendarEvent[];

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    openModal() {
        this.dialog.open(CalendarDayModalComponent, {
            width: '50%',
            data: {
                date: this.date,
            }
        });

    }
}