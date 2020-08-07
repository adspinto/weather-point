import Immutable from 'seamless-immutable';
import {Actions, Weather, Types} from './interface';

const initialState: Weather = Immutable({
  data: {},
  gradient: {
    secondary: '#007EFF',
    main: '#55A9FF',
  },
  status: 'iddle',
  errorMessage: '',
});

export default function start(state = initialState, action: Actions) {
  switch (action.type) {
    case Types.GET_WEATHER_REQUEST:
      return {
        ...state,
        status: 'pending',
      };
    case Types.GET_WEATHER_SUCCESS:
      return {
        ...state,
        status: 'resolved',
        data: action.payload.data,
      };
    case Types.GET_WEATHER_FAILURE:
      return {
        ...state,
        status: 'rejected',
        errorMessage: action.payload.errorMessage,
      };
    case Types.SET_WEATHER_GRADIENT:
      return {
        ...state,
        gradient: action.payload.gradient,
      };

    default:
      return state;
  }
}
