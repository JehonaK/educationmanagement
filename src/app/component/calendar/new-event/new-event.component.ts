import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventFormComponent } from './event-form/event-form.component';

@Component({
    selector: 'new-event',
    templateUrl: './new-event.component.html',
    styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent {

    @Input()
    date: Date;

    constructor(private dialog: MatDialog) { }

    openModal() {
        this.dialog.open(EventFormComponent, {
            width: '40%',
            data: {
                date: this.date,
            }
        });

    }

}