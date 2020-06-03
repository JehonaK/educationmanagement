import { EvaluationModel } from './evaluation.model';
import {FileUploadModel} from './file-upload.model';
import {CourseModel} from './course.model';

export class ActivityModel {
    id: string;
    name: string;
    description: string;
    hasFileUpload: boolean
    deadline: Date;
    gradeSystem: string;
    grade: string;
    courseId: CourseModel;
    evaluations: Array<EvaluationModel>;
    fileUploads: Array<FileUploadModel>;
}
