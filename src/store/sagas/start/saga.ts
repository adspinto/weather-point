import {all, takeLatest} from 'redux-saga/effects';
import {Types as StartTypes} from '../../ducks/start/interface';
import {getStartRequest, checkConnection} from './';

export default function* start() {
  yield all([
    takeLatest(StartTypes.GET_START_REQUEST, getStartRequest),
    takeLatest('@@network-connectivity/CONNECTION_CHANGE', checkConnection),
  ]);
}
