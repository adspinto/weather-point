import {put} from 'redux-saga/effects';

export function* errorHandler(error: any, action?: any) {
  let b = error.response.data.errorMessage;
  let errorMessage = b ? b : 'Não foi possível processar esta operação.';

  if (action && typeof action === 'function') {
    yield put(action(errorMessage));
  }

  console.log({errorMessage, error: error?.response});
}
