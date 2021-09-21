import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const configurStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga);
  return store
}

export default configurStore