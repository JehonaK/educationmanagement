import { Component, Input } from '@angular/core';

@Component({
    selector: 'description-details',
    template: `
    <div class="event_detail__holder description_detail">
    <div class="event_detail__title">
    DESCRIPTION
    </div>
    <div class="event_detail__content">
        {{content}}
        </div>
        </div>
    `,
    styles: [``]
})
export class DescriptionDetailsComponent {

    @Input()
    content: any;
}
