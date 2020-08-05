import {Store} from 'redux';

export const Selectors = {
  getStartState: (state: Store) => {
    return state.start;
  },
};
