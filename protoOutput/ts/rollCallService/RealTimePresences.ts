// Original file: proto/rollCallService.proto


export interface _rollCallService_RealTimePresences_StudentEntry {
  'id'?: (number);
  'firstName'?: (string);
  'lastName'?: (string);
  'present'?: (boolean);
}

export interface _rollCallService_RealTimePresences_StudentEntry__Output {
  'id': (number);
  'firstName': (string);
  'lastName': (string);
  'present': (boolean);
}

export interface RealTimePresences {
  'students'?: (_rollCallService_RealTimePresences_StudentEntry)[];
  'marked'?: (number);
}

export interface RealTimePresences__Output {
  'students': (_rollCallService_RealTimePresences_StudentEntry__Output)[];
  'marked': (number);
}
