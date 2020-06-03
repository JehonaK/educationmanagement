import { Component, Input } from '@angular/core';

@Component({
    selector: 'date-details',
    template: `
        Date: {{content}}
    `,
    styles: []
})
export class DateDetailsComponent {

    @Input()
    content: any;
}
