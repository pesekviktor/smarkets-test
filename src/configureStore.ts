/**
 * Create the store with dynamic reducers
 */

import {applyMiddleware, compose, createStore, StoreEnhancer} from 'redux';
import {createInjectorsEnhancer} from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import createReducer from './reducers';
import {ApplicationRootState, InjectedStore} from './types';

export default function configureStore(
  initialState: ApplicationRootState | {} = {},
) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const {run: runSaga} = sagaMiddleware;

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware];

  /**
   * TODO: Have a look at these tslint issues
   */
    // @ts-ignore
  const enhancers = [
      applyMiddleware(...middlewares),
      createInjectorsEnhancer({
        // @ts-ignore
        createReducer,
        runSaga,
      }),
    ];

  let enhancer = compose(...enhancers) as StoreEnhancer;
  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    enhancer = composeWithDevTools(...enhancers);
  }

  // @ts-ignore
  const store = createStore(
    createReducer(),
    initialState,
    enhancer,
  ) as InjectedStore;

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  return store;
}
