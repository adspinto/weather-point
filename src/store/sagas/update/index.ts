import {call, put, select, race, delay} from 'redux-saga/effects';
import general from '../../../config/general';
import api from '../../../services/api';
import {Platform, InteractionManager} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import {Creators as UpdateActions} from '../../ducks/update/actions';
import {mainNavigation} from '../../..';
import {GetUpdateRequest} from '../../ducks/update/interface';
import {errorHandler} from '../errorHandler';

export function* getUpdateRequest(action: GetUpdateRequest) {
  try {
    yield call(InteractionManager.runAfterInteractions);
    const isConnected = yield select((state) => state.network.isConnected);
    if (isConnected) {
      //GET AVAILABLE UPDATES FROM CODEPUSH
      // yield put(UpdateActions.getUpdateSuccess());
    }
  } catch (error) {
    yield call(errorHandler, error);
  }
}

export function* getUpdateSuccess(action) {
  try {
    let check = yield call(checkDeviceVersion);
    if (check) {
      console.log('check', check, mainNavigation);
      yield delay(3000);
      yield call(mainNavigation.navigate, 'NewUpdate');
    }
  } catch (error) {
    yield call(errorHandler, error);
  }
}

// helper

export function* checkDeviceVersion(action) {
  try {
    let {android, iOs, tablet, iPad} = yield select(
      (state) => state.update.version,
    );

    let {Version_Android, Version_IOS, Version_tablet, Version_iPad} = general;

    let isTablet = DeviceInfo.isTablet();
    let isAndroid = Platform.OS === 'android';

    if (isAndroid) {
      if (isTablet) {
        var versionCheck = yield call(checkVersion, Version_tablet, tablet);
        return versionCheck;
      } else {
        var versionCheck = yield call(checkVersion, Version_Android, android);
        return versionCheck;
      }
    } else {
      if (isTablet) {
        var versionCheck = yield call(checkVersion, Version_iPad, iPad);
        return versionCheck;
      } else {
        var versionCheck = yield call(checkVersion, Version_IOS, iOs);
        return versionCheck;
      }
    }
  } catch (error) {
    yield call(errorHandler, error);
    return false;
  }
}

function* checkVersion(appVersion: string, apiVersion: string) {
  try {
    let appVersionWithoutDot = appVersion.split('.').join('');
    let apiVersionWithoutDot = apiVersion.split('.').join('');

    return appVersionWithoutDot < apiVersionWithoutDot;
  } catch (err) {
    return false;
  }
}
