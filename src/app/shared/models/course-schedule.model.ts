import { DayTimeFrameInstanceModel } from './dayTimeFrameInstance.model';

export class CourseScheduleModel {
    courseId: string;
    dayTimeFrameInstances: Array<DayTimeFrameInstanceModel>;
}