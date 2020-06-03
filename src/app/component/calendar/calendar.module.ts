import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalendarComponent } from './calendar.component';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EventFormComponent } from './new-event/event-form/event-form.component';
import { CalendarDayModalComponent } from './calendar-modal/calendar-day-modal.component';
import { CalendarDayModalEventComponent } from './calendar-modal/calendar-day-modal-event/calendar-day-modal-event.component';
import { EventDetailsModule } from './calendar-modal/event-details/event-details.module';
import { CalendarService } from '../../shared/services/calendar/calendar.service';
import { CalendarUploadComponent } from './calendar-upload/calendar-upload.component';
import { CalendarDownloadComponent } from './calendar-download/calendar-download.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        CommonModule, FormsModule, EventDetailsModule, ReactiveFormsModule, RouterModule, MatDialogModule          
    ],
    declarations: [
        CalendarComponent,
        CalendarDayComponent,
        CalendarMonthComponent,
        NewEventComponent,
        EventFormComponent,
        CalendarDayModalComponent,
        CalendarDayModalEventComponent,
        CalendarUploadComponent,
        CalendarDownloadComponent
    ],
    exports: [
        CalendarComponent,
        CalendarDayComponent,
        CalendarMonthComponent,
        NewEventComponent,
        EventFormComponent,
        CalendarDayModalComponent,
        CalendarDayModalEventComponent,
        FormsModule,
        EventDetailsModule,
        CalendarUploadComponent,
        CalendarDownloadComponent
    ],
    providers: [CalendarService]
})
export class CalendarModule { }