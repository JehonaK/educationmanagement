import { DayTimeFrameModel } from './dayTimeFrame.model';

export class SchoolScheduleModel {
    schoolId: string;
    dayTimeFrames: Array<DayTimeFrameModel>;
}