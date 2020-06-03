import { Component, Input } from '@angular/core';
import { Time } from '@angular/common';

@Component({
    selector: 'time-details',
    template: `
    <div class="event_detail__holder">
        <div class="event_detail__title">
          TIME
        </div>
        <div class="event_detail__content">

            {{start}}-
            {{end}}
        </div>
    </div>
    `,
    styles: []
})
export class TimeDetailsComponent {

    @Input()
    start: string;

    @Input()
    end: string;
}
