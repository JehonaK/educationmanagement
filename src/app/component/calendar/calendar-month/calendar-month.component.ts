import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from '../../../shared/models/calendar/calendar-event.model';
import { CalendarMonthService } from './calendar-month.service';
import { CalendarService } from '../../../shared/services/calendar/calendar.service';

@Component({
    selector: 'calendar-month',
    templateUrl: './calendar-month.component.html',
    styleUrls: ['./calendar-month.component.scss']
})
export class CalendarMonthComponent implements OnInit {

    @Input()
    currentDate: Date;

    @Input()
    selectedDate: Date;

    @Input()
    calendarEvents: CalendarEvent[] = [];

    calendarEventsGrouped: CalendarEvent[][] = [];

    constructor(private calendarMonthService: CalendarMonthService, private calendarService: CalendarService) { }

    ngOnInit(): void {

        this.changeEvents();

        this.calendarMonthService.register(this);
    }

        updateEvents(oldEvent: CalendarEvent, newEvent: CalendarEvent) {
        this.calendarEventsGrouped[oldEvent.date.getDate()] = this.calendarEventsGrouped[oldEvent.date.getDate()].filter(event => event.id != oldEvent.id);
        this.addEvent(newEvent);
    }

    addEvent(newEvent: CalendarEvent) {
        this.calendarEventsGrouped[newEvent.date.getDate()].push(newEvent);
    }

    getStartingDay(): number {
        if (!this.selectedDate) {
            return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0).getDay();
        } else {
            return new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 0).getDay();
        }
    }


    getNumberOfDaysInMonth(): number {
        if (!this.selectedDate) {
            return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
        } else {
            return new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 0).getDate();
        }
    }

    getDateByDay(dayNumber: number): Date {
        let newDate: Date;
        if (!this.selectedDate) {
            newDate = new Date(this.currentDate);
        } else {
            newDate = new Date(this.selectedDate);
        }
        newDate.setDate(dayNumber);
        return newDate;
    }

    changeEvents() {
        this.selectedDate ? this.getEvents(this.selectedDate) : this.getEvents(this.currentDate);
    }

    getEvents(date: Date) {
        this.calendarService.getEventsByMonthYear(date.getFullYear(), date.getMonth() + 1)
            .subscribe(response => {
                response.eventTransportList.forEach(element => {
                    element.date = new Date(element.date);
                });
                this.calendarEvents = response.eventTransportList;
                this.calendarEventsGrouped = this.calendarMonthService.groupEventsByDay(this.calendarEvents,
                    this.getNumberOfDaysInMonth());
            });
    };
}