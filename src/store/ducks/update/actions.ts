import {ActionCreator} from 'redux';

import {
  GetUpdateRequest,
  GetPushNotificationToken,
  GetUpdateFailure,
  GetUpdateSuccess,
  Types,
} from './interface';

const getUpdateRequest: ActionCreator<GetUpdateRequest> = (isHome) => ({
  type: Types.GET_UPDATE_REQUEST,
  payload: {isHome},
});
const getUpdateSuccess: ActionCreator<GetUpdateSuccess> = (data, isHome) => ({
  type: Types.GET_UPDATE_SUCCESS,
  payload: {data, isHome},
});
const getUpdateFailure: ActionCreator<GetUpdateFailure> = (error) => ({
  type: Types.GET_UPDATE_FAILURE,
  payload: {error},
});
const getPushNotificationToken: ActionCreator<GetPushNotificationToken> = (
  token,
) => ({
  type: Types.GET_UPDATE_PUSH_NOTIFICATION,
  payload: {token},
});

export const Creators = {
  getUpdateRequest,
  getUpdateSuccess,
  getUpdateFailure,
  getPushNotificationToken,
};
