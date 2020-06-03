import { Injectable } from '@angular/core';
import { CalendarEvent } from '../../../shared/models/calendar/calendar-event.model';
import { CalendarMonthComponent } from './calendar-month.component';


@Injectable({
    providedIn: 'root'
})
export class CalendarMonthService {

    private calendarMonth: CalendarMonthComponent;

    register(calendarMonth) {
        this.calendarMonth = calendarMonth;
    }

    updateEvents(oldEvent: CalendarEvent, newEvent: CalendarEvent) {
        this.calendarMonth.updateEvents(oldEvent, newEvent);
    }

    getEvents(dayNumber: number) {
        return this.calendarMonth.calendarEventsGrouped[dayNumber];
    }

    getEvent(dayNumber:number, id: number){
        return this.calendarMonth.calendarEventsGrouped[dayNumber].filter(event => event.id != id)[0];
    }

    getDate() {
        return this.calendarMonth.selectedDate ? this.calendarMonth.selectedDate : this.calendarMonth.currentDate;
    }

    addEvent(newEvent: CalendarEvent) {
        this.calendarMonth.addEvent(newEvent);
    }

    changeEvents() {
        this.calendarMonth.changeEvents();
    }

    groupEventsByDay(calendarEvents: CalendarEvent[], numberOfDays: number): CalendarEvent[][] {
        const calendarEventsGrouped = new Array(numberOfDays);
        for (let i = 1; i < numberOfDays+1; i++) {
            calendarEventsGrouped[i] = [];
        }
        calendarEvents.forEach((event) => {
            calendarEventsGrouped[event.date.getDate()].push(event);
        });
        return calendarEventsGrouped;
    }

}