import {all, takeLatest} from 'redux-saga/effects';
import {Types as UpdateTypes} from '../../ducks/update/interface';

import {getUpdateRequest, getUpdateSuccess} from './';

export default function* update() {
  yield all([
    takeLatest(UpdateTypes.GET_UPDATE_REQUEST, getUpdateRequest),
    takeLatest(UpdateTypes.GET_UPDATE_SUCCESS, getUpdateSuccess),
  ]);
}
