/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AppContainer from './src';
import React from 'react';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {Platform, UIManager} from 'react-native';
import 'react-native-gesture-handler';

declare const global: {HermesInternal: null | {}};

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
