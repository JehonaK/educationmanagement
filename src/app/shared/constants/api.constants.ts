const ENVIRONMENT = 'http://192.168.0.138:8662'; // also change file-upload.service
const SCHOOLENVIRONMENT = 'http://192.168.0.137:8081';
const CALENDAR_ENVIRONMENT = 'http://192.168.0.137:8080';
const AUTH = {
  login: ENVIRONMENT + '/auth/login', // post
};

const USER = {
  register: ENVIRONMENT + '/user/users/', // post
  requestPasswordRecovery: ENVIRONMENT + '/user/password-recoveries', // post
  validatePasswordRecoveryLink: ENVIRONMENT + '/user/password-recoveries/', // get and add a pathVariable {passwordRecoveryId}
  changePassword: ENVIRONMENT + '/user/password-recoveries/', // put
  getUserById: ENVIRONMENT + '/user/users',
};

const SCHOOL = {
  getSchoolByAdmin: SCHOOLENVIRONMENT + '/school', // get
  createSchool: SCHOOLENVIRONMENT + '/school', // post and request body school
  updateSchool: SCHOOLENVIRONMENT + '/school', // put and add a pathVariable in service
  getSchoolById: SCHOOLENVIRONMENT + '/school', // get and add a pathVariable in service
  deleteSchoolById: SCHOOLENVIRONMENT + '/school',
  createClass: SCHOOLENVIRONMENT + '/schoolClass',
  updateClass: SCHOOLENVIRONMENT + '/schoolClass',
  getClassById: SCHOOLENVIRONMENT + '/schoolClass',
  getClassByLevelId: SCHOOLENVIRONMENT + '/schoolClass',
  deleteClassById: SCHOOLENVIRONMENT + '/schoolClass',
  addStudentToClass: SCHOOLENVIRONMENT + '/schoolClass/student',
  createLevel: SCHOOLENVIRONMENT + '/level',
  updateLevel: SCHOOLENVIRONMENT + '/level',
  getLevelById: SCHOOLENVIRONMENT + '/level',
  deleteLevelById: SCHOOLENVIRONMENT + '/level',
  getLevelsBySchoolId: SCHOOLENVIRONMENT + '/level/',
  createSubject: SCHOOLENVIRONMENT + '/subject',
  updateSubject: SCHOOLENVIRONMENT + '/subject',
  getSubjectById: SCHOOLENVIRONMENT + '/subject',
  deleteSubjectById: SCHOOLENVIRONMENT + '/subject',
  getSubjectByLevelId: SCHOOLENVIRONMENT + '/subject',
  assignTeacherToSubject: SCHOOLENVIRONMENT + '/subject/assignment',
  getStudentsByClassId: SCHOOLENVIRONMENT + '/user',
};

const COURSE = {
  updateCourse: ENVIRONMENT + '/course/course',
  getCourseById: ENVIRONMENT + '/course/course',
  deleteCourseById: ENVIRONMENT + '/course/course',
  getCoursesByTeacherId: ENVIRONMENT + '/course/course/teacher',
  getCoursesByStudentId: ENVIRONMENT + '/course/course/student',
  createActivity: ENVIRONMENT + '/course/activity',
  updateActivity: ENVIRONMENT + '/course/activity',
  getActivityById: ENVIRONMENT + '/course/activity',
  deleteActivityById: ENVIRONMENT + '/course/activity',
  getActivitiesByCourseId: ENVIRONMENT + '/course/activity',
  createComment: ENVIRONMENT + '/course/post-comment',
  updateComment: ENVIRONMENT + '/course/post-comment',
  getCommentById: ENVIRONMENT + '/course/post-comment',
  deleteCommentById: ENVIRONMENT + '/course/post-comment',
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
  getFileUploadsByActivityId: ENVIRONMENT + '/course/upload/activity',
  getFileUploadsByLessonId: ENVIRONMENT + '/course/upload/lesson',
  createForumPost: ENVIRONMENT + '/course/forum-post',
  updateForumPost: ENVIRONMENT + '/course/forum-post',
  getForumPostById: ENVIRONMENT + '/course/forum-post',
  deleteForumPostById: ENVIRONMENT + '/course/forum-post',
  getForumPostsByCourseId: ENVIRONMENT + '/course/forum-post',
  createLesson: ENVIRONMENT + '/course/lesson',
  updateLesson: ENVIRONMENT + '/course/lesson',
  getLessonById: ENVIRONMENT + '/course/lesson',
  deleteLessonById: ENVIRONMENT + '/course/lesson',
  getLessonsByCourseId: ENVIRONMENT + '/course/lesson/course',
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
const CALENDAR = {
  createCalendarEvent: CALENDAR_ENVIRONMENT + '/calendar/events',
  getEventsByMonthAndYear: CALENDAR_ENVIRONMENT + '/calendar/events',
  downloadCalendar: CALENDAR_ENVIRONMENT + '/calendar/download',
  deleteCalendarEvent: CALENDAR_ENVIRONMENT + '/calendar/events',
  updateCalendarEvent: CALENDAR_ENVIRONMENT + '/calendar/events',
  uploadCalendarEvents: CALENDAR_ENVIRONMENT + '/calendar/upload',
  getEventCount: CALENDAR_ENVIRONMENT + '/calendar/events/empty'
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
  calendar: CALENDAR,
  chat: CHAT,
  meetings: MEETINGS,
  notification: NOTIFICATION,
};
