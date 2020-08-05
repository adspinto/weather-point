import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';

import start from './start';
import update from './update';

// version: {},
// deviceInfo: {},
// status: 'iddle',
// errorMessage: '',

export const startConfig = {
  key: 'startConfig',
  storage: AsyncStorage,
  blacklist: ['tutorialCompleted'],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  writeFailHandler: (err: any) =>
    console.log(err, 'writeFailHandler startConfig'),
};
export const authConfig = {
  key: 'authConfig',
  storage: AsyncStorage,
  blacklist: ['status', 'forgotPasswordStatus'],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  writeFailHandler: (err: any) =>
    console.log(err, 'writeFailHandler startConfig'),
};

export default combineReducers({
  network,
  start: persistReducer(startConfig, start),
  update,
});
