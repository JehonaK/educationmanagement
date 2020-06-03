export class CalendarEventTransport {
    constructor(public title: string, public type: string, public description: string,
        public date: Date, public startingTime: string, public endingTime: string, public id?: number) {
    }
}