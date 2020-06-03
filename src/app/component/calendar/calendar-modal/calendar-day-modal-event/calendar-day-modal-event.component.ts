import { Component, Input, OnInit, Inject } from '@angular/core';
import { CalendarService } from '../../../../shared/services/calendar/calendar.service';
import { CalendarMonthService } from '../../calendar-month/calendar-month.service';
import { MatDialog } from '@angular/material/dialog';
import { EventFormComponent } from '../../new-event/event-form/event-form.component';
import { CalendarEvent } from '../../../../shared/models/calendar/calendar-event.model';

@Component({
    selector: 'calendar-day-modal-event',
    templateUrl: 'calendar-day-modal-event.component.html',
    styleUrls: ['calendar-day-modal-event.component.scss']
})
export class CalendarDayModalEventComponent implements OnInit {

    @Input()
    event: CalendarEvent;

    @Input()
    hostId: number;

    constructor(
        private calendarService: CalendarService,
        private calendarMonthService: CalendarMonthService,
        private dialog: MatDialog
    ) { }

    deleteEvent() {
        this.calendarService.deleteEvent(this.event).subscribe(response => {
            this.calendarMonthService.changeEvents();
            alert("event deleted");
        });
    }

    openModal(event) {
        if (!(event.target as HTMLElement).className.includes('delete_button')) {
            this.dialog.open(EventFormComponent, {
                width: '40%',
                data: {
                    calendarEvent: this.event
                }
            });
        }
    }

    ngOnInit(): void {
    }

    getObjectKeys(object: any) {
        return Object.keys(object);
    }

    getCssClassBasedOnEventType() {
        switch (this.event.type.toUpperCase()) {
            case "USER":
                return "event event--user";
            case "SYSTEM":
                return "event event--system";
            case "SCHEDULE":
                return "event event--schedule";
            case "MEETING":
                return "event event--meeting";
            case "CUSTOM":
                return "event event--custom";

        }
    }

}