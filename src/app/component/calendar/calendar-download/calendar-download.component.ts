import { Component } from '@angular/core';
import { CalendarService } from '../../../shared/services/calendar/calendar.service';


@Component({
    selector: 'calendar-download',
    template: `
    <button class="button is-info-light download_button" (click)="downloadCalendar()">Shkarko Kalendarin</button>
    `,
    styles: [`.download_button{
        margin-top:20px;
    }`]

})
export class CalendarDownloadComponent {

    constructor(private calendarService: CalendarService) { }

    downloadCalendar() {
        this.calendarService.downloadCalendar().subscribe((data) => {
            var file = new Blob([data], { type: 'application/pdf' })
            var fileURL = URL.createObjectURL(file);

            // if you want to open PDF in new tab
            window.open(fileURL);
            var a = document.createElement('a');
            a.href = fileURL;
            a.target = '_blank';
            a.download = 'Calendar_g26052020.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }, error => {
            console.log(error);
        });
    }
}
