import { EvaluationModel } from './evaluation.model';

export class ActivityModel {
    id: string;
    name: string;
    deadline: Date;
    courseId: string;
    evaluations: Array<EvaluationModel>;
}