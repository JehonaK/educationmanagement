import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { EventFormComponent } from './new-event/event-form/event-form.component';
import { NgModule } from '@angular/core';

const calendarRoutes: Routes = [
    {
        path: '',
        component: CalendarComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(calendarRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CalendarRoutingModule { }