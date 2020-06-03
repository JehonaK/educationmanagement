import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CalendarEventTransport } from '../../models/calendar/transport/calendar-event.transport';
import { CalendarEventListResponse } from '../../models/calendar/transport/calendar-event-list-response.transport';
import { CalendarEvent } from '../../models/calendar/calendar-event.model';
import { ENDPOINTS } from '../../constants/api.constants';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class CalendarService {

    constructor(private http: HttpClient) { }

    createEvent(calendarEventTransport: CalendarEventTransport) {
        return this.http.post<any>(ENDPOINTS.calendar.createCalendarEvent, calendarEventTransport, { params: { schoolId: localStorage.getItem("schoolId") } });
    }

    getEventsByMonthYear(year: number, month: number): Observable<CalendarEventListResponse> {
        return this.http.get<any>(ENDPOINTS.calendar.getEventsByMonthAndYear,
            { params: { schoolId: localStorage.getItem("schoolId"), year: year + "", month: month + "" } });
    }

    downloadCalendar() {
        return this.http.get(ENDPOINTS.calendar.downloadCalendar + "?schoolId="+localStorage.getItem("schoolId"), { responseType: 'arraybuffer' });
    }

    deleteEvent(calendarEvent: CalendarEvent) {
        return this.http.delete<any>(ENDPOINTS.calendar.deleteCalendarEvent + calendarEvent.id,
            { params: { schoolId: localStorage.getItem("schoolId") } });
    }

    updateEvent(calendarEventTransport: CalendarEventTransport) {
        return this.http.put<any>(ENDPOINTS.calendar.updateCalendarEvent, calendarEventTransport,
            { params: { schoolId: localStorage.getItem("schoolId") } });
    }

    addEventsByFile(csvFile) {
        return this.http.post<any>(ENDPOINTS.calendar.uploadCalendarEvents, csvFile,
            { params: { schoolId: localStorage.getItem("schoolId") } });
    }

    getEventCount() {
        return this.http.get<any>(ENDPOINTS.calendar.getEventCount,
            { params: { schoolId: localStorage.getItem("schoolId") } });
    }
}