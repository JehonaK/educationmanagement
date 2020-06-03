import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DateDetailsComponent } from './date-details/date-details.component';
import { TitleDetailsComponent } from './title-details/title-details.component';
import { TimeDetailsComponent } from './time-details/time-details.component';
import { DescriptionDetailsComponent } from './description-details/description-details.component';

@NgModule({
    declarations: [
        DateDetailsComponent,
        TitleDetailsComponent,
        TimeDetailsComponent,
        DescriptionDetailsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DateDetailsComponent,
        TitleDetailsComponent,
        TimeDetailsComponent,
        DescriptionDetailsComponent
    ]
})
export class EventDetailsModule { }
