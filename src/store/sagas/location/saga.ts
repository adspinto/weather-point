import {all, takeLatest} from 'redux-saga/effects';
import {Types as LocationTypes} from '../../ducks/location/interface';
import {getLocationRequest} from './';

export default function* location() {
  yield all([
    takeLatest(LocationTypes.GET_LOCATION_REQUEST, getLocationRequest),
  ]);
}
