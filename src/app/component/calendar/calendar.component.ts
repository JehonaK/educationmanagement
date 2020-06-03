import { Component, OnInit } from '@angular/core';
import { DAYS_OF_WEEK, MONTH_NAMES } from './calendarEventsData';
import { CalendarMonthService } from './calendar-month/calendar-month.service';
import { CalendarService } from '../../shared/services/calendar/calendar.service';
import { Subscription, fromEventPattern } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { CalendarDayModalComponent } from './calendar-modal/calendar-day-modal.component';
import { EventFormComponent } from './new-event/event-form/event-form.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  selectedDate: Date;
  currentDate: Date;
  isEmpty: boolean;
  days: String[] = DAYS_OF_WEEK;
  months: String[] = MONTH_NAMES;
  routeQueryParams: Subscription;
  dialogRef;
  constructor(public dialog: MatDialog,
    private calendarMonthService: CalendarMonthService,
    private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.isCalendarEmpty()
  }

  changeMonth() {
    if (!this.selectedDate) {
      this.selectedDate = new Date(this.currentDate);
    }
    if ((event.target as Element).classList.contains("arrow--left")) {
      this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
    } else if ((event.target as Element).classList.contains("arrow--right")) {
      this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
    }

    if (this.selectedDate.getMonth() == this.currentDate.getMonth()) {
      this.selectedDate = null;
    }
    this.calendarMonthService.changeEvents();
  }

  isCalendarEmpty() {
    this.calendarService.getEventCount().subscribe(response => {
      this.isEmpty = response.empty;
    });
  }

  filter(event) {
    const element = event.target as HTMLElement;
    let collection;
    if (element.className.includes('user')) {
      collection = document.getElementsByClassName('circle circle--user-event');
    } else if (element.className.includes('custom')) {
      collection = document.getElementsByClassName('circle circle--custom-event');
    } else if (element.className.includes('meeting')) {
      collection = document.getElementsByClassName('circle circle--meeting-event');
    } else if (element.className.includes('schedule')) {
      collection = document.getElementsByClassName('circle circle--schedule-event');
    } else if (element.className.includes('system')) {
      collection = document.getElementsByClassName('circle circle--system-event');
    }
    this.alternateEventCircleView(collection, element);
  }

  alternateEventCircleView(collection, element: HTMLElement) {
    for (var i = 0; i < collection.length; i++) {
      if (element.innerHTML.includes('Hide')) {
        (collection[i] as HTMLElement).style.display = "none";
      }
      else {
        (collection[i] as HTMLElement).style.display = "block";
      } 
    }
    if (element.innerHTML.includes('Show')) {
      element.innerHTML = 'Hide' + element.innerHTML.substring(4);
    } else {
      element.innerHTML = 'Show' + element.innerHTML.substring(4);
    }
  }



}
