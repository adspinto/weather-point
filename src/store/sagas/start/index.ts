import {put, call, all, delay, select} from 'redux-saga/effects';
import {UpdateActions} from '../../creators';
import {mainNavigation} from '../../..';
import {CommonActions} from '@react-navigation/native';
import {errorHandler} from '../errorHandler';
import {InteractionManager} from 'react-native';
import api from '../../../services/api';
import Geolocation from '@react-native-community/geolocation';
import {LocationActions} from '../../creators';

export function* getStartRequest() {
  try {
    yield call(InteractionManager.runAfterInteractions);
    yield all([put(UpdateActions.getUpdateRequest())]);

    let tutorialCompleted = yield select(
      (state) => state.start.tutorialCompleted,
    );

    yield put(LocationActions.getLocationRequest());

    yield delay(1000);

    if (!tutorialCompleted) {
      yield call(mainNavigation.navigate, 'Tutorial');
    } else {
      const reset = {
        index: 1,
        routes: [{name: 'Home'}],
      };
      yield call(mainNavigation.reset, reset);
    }
  } catch (error) {
    yield call(errorHandler, error);
  }
}

export function* checkConnection(action: any) {
  try {
    const isConnected = action.payload;
    if (isConnected) {
      //do something while is connected
      console.log(mainNavigation);
      mainNavigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Home'}],
        }),
      );
    } else {
      console.log(mainNavigation);
      mainNavigation.dispatch(
        CommonActions.navigate({
          name: 'NoConnection',
        }),
      );
      //do something while is disconnected
    }
    console.log('action no connection', action);
  } catch (error) {
    yield call(errorHandler, error);
  }
}
