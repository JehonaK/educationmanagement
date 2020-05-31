const ENVIRONMENT = 'http://192.168.0.105:8080';

const AUTH = {
  login: ENVIRONMENT + '/auth/login', // post
};

const USER = {
  register: ENVIRONMENT + '/user/users/', // post
  requestPasswordRecovery: ENVIRONMENT + '/user/password-recoveries', // post
  validatePasswordRecoveryLink: ENVIRONMENT + '/user/password-recoveries/', // get and add a pathVariable {passwordRecoveryId}
  changePassword: ENVIRONMENT + '/user/password-recoveries/', // put
};

const SCHOOL = {
  getSchoolByAdmin: ENVIRONMENT + '/school/school', // get
  createSchool: ENVIRONMENT + '/school/school', // post and request body school
  updateSchool: ENVIRONMENT + '/school/school', // put and add a pathVariable in service
  getSchoolById: ENVIRONMENT + '/school/school', // get and add a pathVariable in service
  deleteSchoolById: ENVIRONMENT + '/school/school',
  createClass: ENVIRONMENT + '/school/class',
  updateClass: ENVIRONMENT + '/school/class',
  getClassById: ENVIRONMENT + '/school/class',
  getClassByLevelId: ENVIRONMENT + '/school/class',
  deleteClassById: ENVIRONMENT + '/school/class',
  addStudentToClass: ENVIRONMENT + '/school/class/student',
  createLevel: ENVIRONMENT + '/school/level',
  updateLevel: ENVIRONMENT + '/school/level',
  getLevelById: ENVIRONMENT + '/school/level',
  deleteLevelById: ENVIRONMENT + '/school/level',
  getLevelsBySchoolId: ENVIRONMENT + '/school/level/',
  createSubject: ENVIRONMENT + '/school/subject',
  updateSubject: ENVIRONMENT + '/school/subject',
  getSubjectById: ENVIRONMENT + '/school/subject',
  deleteSubjectById: ENVIRONMENT + '/school/subject',
  getSubjectByLevelId: ENVIRONMENT + '/school/subject',
  assignTeacherToSubject: ENVIRONMENT + '/school/subject/assignment',
  getStudentsByClassId: ENVIRONMENT + '/school/user',
};

const COURSE = {
  updateCourse: ENVIRONMENT + '/course/course',
  getCourseById: ENVIRONMENT + '/course/course',
  deleteCourseById: ENVIRONMENT + '/course/course',
  getCoursesByTeacherId: ENVIRONMENT + '/course/teacher',
  getCoursesByStudentId: ENVIRONMENT + '/course/course/student',
  createActivity: ENVIRONMENT + '/course/activity',
  updateActivity: ENVIRONMENT + '/course/activity',
  getActivityById: ENVIRONMENT + '/course/activity',
  deleteActivityById: ENVIRONMENT + '/course/activity',
  getActivitiesByCourseId: ENVIRONMENT + '/course/activity',
  createComment: ENVIRONMENT + '/course/comment',
  updateComment: ENVIRONMENT + '/course/comment',
  getCommentById: ENVIRONMENT + '/post-comment',
  deleteCommentById: ENVIRONMENT + '/course/comment',
  createCustomActivity: ENVIRONMENT + '/course/custom-activity',
  updateCustomActivity: ENVIRONMENT + '/course/custom-activity',
  getCustomActivityById: ENVIRONMENT + '/course/custom-activity',
  deleteCustomActivityById: ENVIRONMENT + '/course/custom-activity',
  createEvaluation: ENVIRONMENT + '/course/evaluation',
  updateEvaluation: ENVIRONMENT + '/course/evaluation',
  getEvaluationById: ENVIRONMENT + '/course/evaluation',
  deleteEvaluationById: ENVIRONMENT + '/course/evaluation',
  getEvaluationByStudentIdAndCourseId: ENVIRONMENT + '/course/evaluation',
  createFileUpload: ENVIRONMENT + '/course/upload',
  getFileUploadById: ENVIRONMENT + '/course/upload',
  deleteFileUploadById: ENVIRONMENT + '/course/upload',
  downloadFileByFileUploadId : ENVIRONMENT + '/course/upload/download',
  getFileUploadsByActivityId: ENVIRONMENT + '/course/upload', // request param
  createForumPost: ENVIRONMENT + '/course/forum-post',
  updateForumPost: ENVIRONMENT + '/course/forum-post',
  getForumPostById: ENVIRONMENT + '/course/forum-post',
  deleteForumPostById: ENVIRONMENT + '/course/forum-post',
  getForumPostsByStudentId: ENVIRONMENT + '/course/forum-post',
};

const SCHEDULE = {
  getCourseScheduleByCourseId: ENVIRONMENT + '/schedule-presence/course-schedule',
  createCourseSchedule: ENVIRONMENT + '/schedule-presence/course-schedule',
  updateCourseSchedule: ENVIRONMENT + '/schedule-presence/course-schedule',
  deleteCourseScheduleByCourseId: ENVIRONMENT + '/schedule-presence/course-schedule',
  setTimeFrameDescription: ENVIRONMENT + '/schedule-presence/course-schedule',
  getPresenceReportByStudentId: ENVIRONMENT + '/schedule-presence/presence',
  getPresenceReportByTeacherId: ENVIRONMENT + '/schedule-presence/presence',
  createStudentPresence: ENVIRONMENT + '/schedule-presence/presence',
  createTeacherPresence: ENVIRONMENT + '/schedule-presence/presence/teacher',
  updateStudentPresence: ENVIRONMENT + '/schedule-presence/presence',
  getSchoolScheduleBySchoolId: ENVIRONMENT + '/schedule-presence/school-schedule',
  createSchoolSchedule: ENVIRONMENT + '/schedule-presence/school-schedule',
  updateSchoolSchedule: ENVIRONMENT + '/schedule-presence/school-schedule',
  deleteSchoolScheduleBySchoolId: ENVIRONMENT + '/schedule-presence/school-schedule',
};

const CHAT = {
  getConversationsByUserId: ENVIRONMENT + 'chat/chat-users/conversations',
  getUsersByConversationId: ENVIRONMENT + 'chat/chat/conversations/', // {conversationId} + '/participants'
  getOnlineMeetingsByConversationId: ENVIRONMENT + '/chat/conversations/', // {conversationId} + '/online-meetings'
  getMessagesByConversationId: ENVIRONMENT + '/messages',
  createConversation: ENVIRONMENT + 'chat/conversations',
};

const MEETINGS = {
  getMeetingById: ENVIRONMENT + '/meeting/meetings',
  getMeetingByUserId: ENVIRONMENT + '/meeting/meetings',
  createMeeting: ENVIRONMENT + '/meeting/meetings',
  updateMeeting: ENVIRONMENT + '/meeting/meetings',
  addMeetingComment: ENVIRONMENT + '/meeting/meetings/', // {meetingId} + '/comment'
  deleteMeetingById: ENVIRONMENT + '/meeting/meetings',
};

const NOTIFICATION = {
  getNotificationsByUserId: ENVIRONMENT + '/notification/notifications',
  updateNotificationReadStatus: ENVIRONMENT + '/notification/notifications',
  deleteNotificationById: ENVIRONMENT + '/notification/notifications',
  deleteAllNotificationsByUserId: ENVIRONMENT + '/notification/notifications',
};

export const ENDPOINTS = {
  auth: AUTH,
  user: USER,
  school: SCHOOL,
  course: COURSE,
  schedule: SCHEDULE,
  chat: CHAT,
  meetings: MEETINGS,
  notification: NOTIFICATION,
};
