import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

function configureStore(initialState) {
  const middlewares = [
    thunk,
    logger,
  ];

  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}

export default configureStore;