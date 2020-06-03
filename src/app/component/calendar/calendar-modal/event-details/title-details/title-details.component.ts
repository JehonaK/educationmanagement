import { Component, Input } from '@angular/core';

@Component({
    selector: 'title-details',
    template: `
        <div class="event_detail__holder event__title">
        {{content}}
        </div>
    `,
    styles: [`.event__title{
        font-weight: 1000;
        font-size: large;
        }`]
})
export class TitleDetailsComponent {

    @Input()
    content: any;
}
