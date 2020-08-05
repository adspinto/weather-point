export enum Types {
  GET_UPDATE_REQUEST = 'update/GET_UPDATE_REQUEST',
  GET_UPDATE_SUCCESS = 'update/GET_UPDATE_REQUEST_SUCCESS',
  GET_UPDATE_FAILURE = 'update/GET_UPDATE_REQUEST_FAILURE',
  GET_UPDATE_PUSH_NOTIFICATION = 'update/GET_UPDATE_PUSH_NOTIFICATION',
}
export interface Start {
  version: object;
  deviceInfo: string;
  status: string;
  errorMessage: string;
}

export interface Actions {
  action: Function;
  type: string;
  payload: any;
}

export interface GetUpdateRequest {
  type: Types.GET_UPDATE_REQUEST;
  payload: {
    isHome: boolean;
  };
}
export interface GetUpdateSuccess {
  type: Types.GET_UPDATE_SUCCESS;
  payload: {
    data: boolean;
    isHome: boolean;
  };
}
export interface GetUpdateFailure {
  type: Types.GET_UPDATE_FAILURE;
  payload: {error: object};
}
export interface GetPushNotificationToken {
  type: Types.GET_UPDATE_PUSH_NOTIFICATION;
  payload: {
    token: string;
  };
}
