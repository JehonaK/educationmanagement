import {ActivityModel} from './activity.model';
import {ForumModel} from './forum.model';
import {TokenModel} from './token.model';
import {FileUploadModel} from './file-upload.model';

export class LessonModel {
  id: string;
  name: string;
  description: string;
  courseId: string;
  fileUploads: Array<FileUploadModel>;
}
