import { CalendarEvent } from '../../shared/models/calendar/calendar-event.model';

export const DAYS_OF_WEEK: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const MONTH_NAMES: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

export const CALENDAR_EVENTS: CalendarEvent[] = [
    {
        title: "Event 1",
        type: "User",
        description: "Math homework",
        date: new Date(2020, 4, 24),
        startingTime: "15:30:00",
        endingTime: "16:30:00",
    },
    {
        title: "Event 2",
        type: "System",
        description: "Server Maintainance",
        date: new Date(2020, 4, 28),
        startingTime: "22:00:00",
        endingTime: "22:30:00"
    },
    {
        title: "Event 3",
        type: "User",
        description: "Biology homework",
        date: new Date(2020, 4, 21),
        startingTime: "17:30:00",
        endingTime: "18:30:00"
    },
    {
        title: "Event 4",
        type: "Schedule",
        description: "Math class",
        date: new Date(2020, 4, 20),
        startingTime: "10:30:00",
        endingTime: "11:15:00",
    },
    {
        title: "Event 5",
        type: "Schedule",
        description: "Physical Education class",
        date: new Date(2020, 4, 21),
        startingTime: "12:10:00",
        endingTime: "12:55:00",
    },
    {
        title: "Event 6",
        type: "Custom",
        description: "Independence Day",
        date: new Date(2020, 4, 21),
        startingTime: "00:00:00",
        endingTime: "23:59:59",
    },
    {
        title: "Event 7",
        type: "Meeting",
        description: "New dress code",
        date: new Date(2020, 4, 20),
        startingTime: "15:30:00",
        endingTime: "16:30:00",
    },

];
