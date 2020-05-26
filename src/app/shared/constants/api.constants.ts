const ENVIRONMENT = 'http://192.168.0.138:8662';

const AUTH = {
  login: ENVIRONMENT + '/auth/login', // post
};

const USER = {
  register: ENVIRONMENT + '/user/users/', // post
  requestPasswordRecovery: ENVIRONMENT + 'user/password-recoveries/', // post
  validatePasswordRecoveryLink: ENVIRONMENT + 'user/password-recoveries/', // get and add a pathVariable {passwordRecoveryId}
  changePassword: ENVIRONMENT + 'user/password-recoveries/', // put
};

const SCHOOL = {
  getSchoolByAdmin: ENVIRONMENT + '/school', // get
  createSchool: ENVIRONMENT + '/school', // post and request body school
  updateSchool: ENVIRONMENT + '/school', // put
};

const COURSE = {};

const SCHEDULE = {};

const CHAT = {};

const MEETINGS = {};

const NOTIFICATION = {};

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
