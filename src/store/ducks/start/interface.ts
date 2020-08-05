export interface Start {
  version: object;
  deviceInfo: object;
  status: string;
  errorMessage: string;
  tutorialCompleted: boolean;
}

export enum Types {
  GET_START_REQUEST = 'start/GET_START_REQUEST',
  GET_START_SUCCESS = 'start/GET_START_SUCCESS',
  GET_START_REQUEST_SUCCESS = 'start/GET_START_REQUEST_SUCCESS',
  GET_START_REQUEST_FAILURE = 'start/GET_START_REQUEST_FAILURE',
  GET_START_REQUEST_CANCEL = 'start/GET_START_REQUEST_CANCEL',

  CHECK_INTERNET_CONNECTION = 'start/CHECK_INTERNET_CONNECTION',
  NO_INTERNET_CONNECTION = 'start/NO_INTERNET_CONNECTION',
  TRY_AGAIN_START_REQUEST = 'start/TRY_AGAIN_START_REQUEST',
  GET_START_API_ERROR = 'start/GET_START_API_ERROR',
  START_SET_DEVICE_INFO = 'start/START_SET_DEVICE_INFO',
  SET_TUTORIAL_COMPLETED = 'start/SET_TUTORIAL_COMPLETED',
}
export interface Actions {
  action: () => void;
  type: string;
  payload: any;
}

export interface GetStartRequest {
  type: Types.GET_START_REQUEST;
}
export interface GetStartSuccess {
  type: Types.GET_START_SUCCESS;
}
export interface SetTutorialCompleted {
  type: Types.SET_TUTORIAL_COMPLETED;
}
