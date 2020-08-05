import Immutable from 'seamless-immutable';
import {Types, Actions} from './interface';

const initialState = Immutable({
  version: {},
  loading: false,
  error: false,
  errorMessage: '',
  cancel: false,
});

export default function update(state = initialState, action: Actions) {
  switch (action.type) {
    case Types.GET_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_UPDATE_SUCCESS:
      return {
        ...state,
        version: action.payload.data,
        loading: false,
      };

    case Types.GET_UPDATE_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
}
