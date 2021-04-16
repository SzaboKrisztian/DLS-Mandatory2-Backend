// Original file: proto/accountService.proto

import type { Course as _accountService_Course, Course__Output as _accountService_Course__Output } from '../accountService/Course';

export interface Person {
  'id'?: (number);
  'firstName'?: (string);
  'lastName'?: (string);
  'courses'?: (_accountService_Course)[];
  'accountId'?: (number);
  'email'?: (string);
}

export interface Person__Output {
  'id': (number);
  'firstName': (string);
  'lastName': (string);
  'courses': (_accountService_Course__Output)[];
  'accountId': (number);
  'email': (string);
}
