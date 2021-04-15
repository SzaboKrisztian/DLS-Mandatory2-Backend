// Original file: proto/courseService.proto

import type { Course as _courseService_Course, Course__Output as _courseService_Course__Output } from '../courseService/Course';

export interface Person {
  'id'?: (number);
  'firstName'?: (string);
  'lastName'?: (string);
  'courses'?: (_courseService_Course)[];
  'accountId'?: (number);
  'email'?: (string);
}

export interface Person__Output {
  'id': (number);
  'firstName': (string);
  'lastName': (string);
  'courses': (_courseService_Course__Output)[];
  'accountId': (number);
  'email': (string);
}
