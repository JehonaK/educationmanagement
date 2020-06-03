import { CalendarEvent } from '../calendar-event.model';

export class CalendarEventListResponse {
    constructor(public eventTransportList: CalendarEvent[]) { }
}
