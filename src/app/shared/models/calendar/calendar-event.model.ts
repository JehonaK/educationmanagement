export class CalendarEvent {
    constructor(public title: string, public type: string, public description: string,
        public date: Date, public startingTime: string, public endingTime: string,
        public subEventId?: number, public refId?: number, public id?: number) {
    }
}



