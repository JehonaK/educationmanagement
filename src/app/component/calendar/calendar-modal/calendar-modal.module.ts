import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarDayModalComponent } from './calendar-day-modal.component';
import { CalendarDayModalEventComponent } from './calendar-day-modal-event/calendar-day-modal-event.component';
import { EventDetailsModule } from './event-details/event-details.module';

@NgModule({
    imports: [CommonModule, EventDetailsModule],
    declarations: [CalendarDayModalComponent, CalendarDayModalEventComponent],
    exports: [CalendarDayModalComponent, ]
})
export class CalendarModalModule { }