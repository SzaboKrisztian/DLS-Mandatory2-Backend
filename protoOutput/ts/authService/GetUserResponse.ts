// Original file: proto/authService.proto


export interface GetUserResponse {
  'isTeacher'?: (boolean);
  'isAdmin'?: (boolean);
  'id'?: (number);
  'firstName'?: (string);
  'lastName'?: (string);
  'accountId'?: (number);
}

export interface GetUserResponse__Output {
  'isTeacher': (boolean);
  'isAdmin': (boolean);
  'id': (number);
  'firstName': (string);
  'lastName': (string);
  'accountId': (number);
}
