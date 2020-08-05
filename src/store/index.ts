import {createStore, applyMiddleware, compose, Store} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks';
import rootSaga from './sagas';
import {createLogger} from 'redux-logger';

const logger = createLogger({
  collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

var store: Store;
if (__DEV__) {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware, logger), //logger
      // compose(applyMiddleware(sagaMiddleware) //logger
    ),
  );
} else {
  store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
}

let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
