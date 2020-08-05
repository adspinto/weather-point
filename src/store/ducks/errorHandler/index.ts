import Immutable from 'seamless-immutable';
import _ from 'lodash';
import {makeId} from '../../sagas/utils';

export const Selectors = {
  removeFromQueue: (state, id) => {
    return [...state.errorHandler.queue].filter((f) => f.id !== id);
  },
  getQueue: (state) => state.errorHandler.queue,
  prepareQueue: (state, error) => {
    let nextQueue = [...state.errorHandler.queue];

    if (error) {
      let message = error?.message;

      if (
        !(message == 'Network Error' || error?.err == 'Você está sem internet.')
      ) {
        let nextError = error;
        nextError.id = makeId(24);
        nextQueue = _.unionBy([...state.errorHandler.queue], [nextError], 'id');
      }
    }

    return nextQueue;
  },
};

export const Types = {
  CHECK_ERROR_REQUEST: 'errorHandler/CHECK_ERROR_REQUEST',
  GET_ERROR_REQUEST: 'errorHandler/GET_ERROR_REQUEST',
  GET_ERROR_SUCCESS: 'errorHandler/GET_ERROR_SUCCESS',
  GET_ERROR_FAILURE: 'errorHandler/GET_ERROR_FAILURE',
  GET_ERROR_REMOVE_FROM_QUEUE: 'errorHandler/GET_ERROR_REMOVE_FROM_QUEUE',
};

const initialState = Immutable({
  queue: [],
  currentError: {},
  error: false,
  loading: false,
  errorMessage: '',
});

export default function errorHandler(state = initialState, action) {
  switch (action.type) {
    case Types.GET_ERROR_REQUEST:
      return {
        ...state,
      };
    case Types.GET_ERROR_SUCCESS:
      return {
        ...state,
        queue: action.payload.queue,
      };
    case Types.GET_ERROR_FAILURE:
      return {
        ...state,
      };

    case Types.GET_ERROR_REMOVE_FROM_QUEUE:
      return {
        ...state,
        queue: action.payload.queue,
      };

    default:
      return state;
  }
}

