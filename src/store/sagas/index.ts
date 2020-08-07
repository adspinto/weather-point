import {all, fork, call} from 'redux-saga/effects';
import {networkSaga} from 'react-native-offline';
import start from './start/saga';
import update from './update/saga';
import location from './location/saga';
import weather from './weather/saga';

export default function* rootSaga() {
  return yield all([
    fork(networkSaga, {pingInterval: 20000}),
    call(start),
    call(update),
    call(location),
    call(weather),
  ]);
}
