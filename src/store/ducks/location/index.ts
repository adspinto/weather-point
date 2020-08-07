import Immutable from 'seamless-immutable';
import {Actions, Location, Types} from './interface';

const initialState: Location = Immutable({
  data: {},
  status: 'iddle',
  errorMessage: '',
});

export default function start(state = initialState, action: Actions) {
  switch (action.type) {
    case Types.GET_LOCATION_REQUEST:
      return {
        ...state,
        status: 'pending',
      };
    case Types.GET_LOCATION_SUCCESS:
      return {
        ...state,
        status: 'resolved',
        data: action.payload.data,
      };
    case Types.GET_LOCATION_FAILURE:
      return {
        ...state,
        status: 'rejected',
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
