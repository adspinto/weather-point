import {
  GetStartRequest,
  GetStartSuccess,
  SetTutorialCompleted,
  Types,
} from './interface';

const getStartRequest = (): GetStartRequest => ({
  type: Types.GET_START_REQUEST,
});
const getStartSuccess = (): GetStartSuccess => ({
  type: Types.GET_START_SUCCESS,
});
const setTutorialCompleted = (): SetTutorialCompleted => ({
  type: Types.SET_TUTORIAL_COMPLETED,
});

export const Creators = {
  getStartRequest,
  getStartSuccess,
  setTutorialCompleted,
};
