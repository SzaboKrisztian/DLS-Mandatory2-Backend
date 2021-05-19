// Original file: proto/courseService.proto


export interface _courseService_PresencesForCourseRes_RollCall_Presence {
  'id'?: (number);
  'timestamp'?: (string);
  'studentId'?: (number);
  'teacherId'?: (number);
}

export interface _courseService_PresencesForCourseRes_RollCall_Presence__Output {
  'id': (number);
  'timestamp': (string);
  'studentId': (number);
  'teacherId': (number);
}

export interface _courseService_PresencesForCourseRes_RollCall {
  'id'?: (number);
  'periodStart'?: (string);
  'periodEnd'?: (string);
  'presences'?: (_courseService_PresencesForCourseRes_RollCall_Presence)[];
}

export interface _courseService_PresencesForCourseRes_RollCall__Output {
  'id': (number);
  'periodStart': (string);
  'periodEnd': (string);
  'presences': (_courseService_PresencesForCourseRes_RollCall_Presence__Output)[];
}

export interface PresencesForCourseRes {
  'rollCalls'?: (_courseService_PresencesForCourseRes_RollCall)[];
}

export interface PresencesForCourseRes__Output {
  'rollCalls': (_courseService_PresencesForCourseRes_RollCall__Output)[];
}
