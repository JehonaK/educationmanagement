import { Component, OnInit, Input, Inject } from '@angular/core';
import { CalendarEvent } from '../../../../shared/models/calendar/calendar-event.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EventFormValidators } from './event-form-validators';
import { formatDate, Time } from "@angular/common";
import { CalendarMonthService } from '../../calendar-month/calendar-month.service';
import { CalendarService } from '../../../../shared/services/calendar/calendar.service';
import { CalendarEventTransport } from '../../../../shared/models/calendar/transport/calendar-event.transport';
import { EventType } from '../../../../shared/models/calendar/calendar-event-type.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarDayModalComponent } from '../../calendar-modal/calendar-day-modal.component';

@Component({
    selector: 'event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {

    calendarEvent: CalendarEvent;

    date: Date;


    constructor(private formBuilder: FormBuilder,
        private calendarService: CalendarService, private calendarMonthService: CalendarMonthService,
        public dialogRef: MatDialogRef<CalendarDayModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { date: Date, calendarEvent: CalendarEvent }) {
        this.date = data.date;
        this.calendarEvent = data.calendarEvent
    }

    eventForm: FormGroup;


    ngOnInit(): void {
        if (!this.calendarEvent) {
            this.eventForm = this.formBuilder.group({
                title: ['', Validators.required],
                type: ['', Validators.required],
                description: ['', Validators.required],
                eventTime: this.formBuilder.group({
                    startingTimeHours: [11, [Validators.required, EventFormValidators.isInHours]],
                    startingTimeMinutes: [30, [Validators.required, EventFormValidators.isInMinutes]],
                    endingTimeHours: [12, [Validators.required, EventFormValidators.isInHours]],
                    endingTimeMinutes: [30, [Validators.required, EventFormValidators.isInMinutes]],
                }, { validators: EventFormValidators.validateEventLength })
            })

            if (this.date) {
                this.eventForm.registerControl('date', new FormControl(formatDate(this.date, 'yyyy-MM-dd', 'en'), [Validators.required, EventFormValidators.isDateInThePast]));
            } else {
                this.eventForm.registerControl('date', new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'), [Validators.required, EventFormValidators.isDateInThePast]));
            }

        } else {
            const startingTime = this.calendarEvent.startingTime.split(":");
            const endingTime = this.calendarEvent.endingTime.split(":");
            this.eventForm = this.formBuilder.group({
                title: [this.calendarEvent.title, Validators.required],
                type: [this.calendarEvent.type, Validators.required],
                description: [this.calendarEvent.description, Validators.required],
                date: [formatDate(this.calendarEvent.date, 'yyyy-MM-dd', 'en'), [Validators.required, EventFormValidators.isDateInThePast]],
                eventTime: this.formBuilder.group({
                    startingTimeHours: [startingTime[0], [Validators.required, EventFormValidators.isInHours]],
                    startingTimeMinutes: [startingTime[1], [Validators.required, EventFormValidators.isInMinutes]],
                    endingTimeHours: [endingTime[0], [Validators.required, EventFormValidators.isInHours]],
                    endingTimeMinutes: [endingTime[1], [Validators.required, EventFormValidators.isInMinutes]],
                }, { validators: EventFormValidators.validateEventLength })
            })
        }
    }

    onDateChange(event: any) {
        this.eventForm.patchValue({ date: event.target.value });
    }

    submitForm() {
        const event: CalendarEventTransport = new CalendarEventTransport(this.eventForm.get('title').value, this.eventForm.get('type').value,
            this.eventForm.get('description').value, this.eventForm.get('date').value as Date,
            this.eventForm.get('eventTime').get('startingTimeHours').value + ":" + this.eventForm.get('eventTime').get('startingTimeMinutes').value + ":00",
            this.eventForm.get('eventTime').get('endingTimeHours').value + ":" + this.eventForm.get('eventTime').get('endingTimeMinutes').value + ":00");
        if (!this.calendarEvent) {
            this.calendarService.createEvent(event).subscribe(
                transport => {
                    transport.date = new Date(transport.date);
                    this.calendarMonthService.addEvent(transport);
                    alert("Event created successfully");
                    this.dialogRef.close();
                    this.ngOnInit();
                }
            )
        } else {
            event.id = this.calendarEvent.id;
            this.calendarService.updateEvent(event).subscribe(
                transport => {
                    transport.date = new Date(transport.date);
                    this.calendarMonthService.updateEvents(this.calendarEvent, transport);
                    alert("Event updated successfully");
                    this.dialogRef.close();
                    this.ngOnInit();
                }
            )
        };
    }

    getEventTypes() {
        return Object.values(EventType).filter(eventType => eventType != 'SCHEDULE' && eventType != 'MEETING');
    }

    setValue() {
        if (this.calendarEvent) {
            console.log(this.calendarEvent.type);
            console.log(this.eventForm.get('type').value);
        }
    }

}
