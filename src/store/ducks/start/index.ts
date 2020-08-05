import Immutable from 'seamless-immutable';
import {Actions, Start, Types} from './interface';

const initialState: Start = Immutable({
  version: {},
  deviceInfo: {},
  status: 'iddle',
  errorMessage: '',
  tutorialCompleted: false,
});

export default function start(state = initialState, action: Actions) {
  switch (action.type) {
    case Types.GET_START_REQUEST:
      return {
        ...state,
        status: 'pending',
      };
    case Types.GET_START_SUCCESS:
      return {
        ...state,
        status: 'iddle',
      };
    case Types.SET_TUTORIAL_COMPLETED:
      return {
        ...state,
        tutorialCompleted: true,
      };

    default:
      return state;
  }
}
