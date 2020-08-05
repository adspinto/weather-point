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
import 'react-native-gesture-handler';

declare const global: {HermesInternal: null | {}};

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
