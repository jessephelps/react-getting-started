import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

function configureStore() {
  const middlewares = [
    thunk,
    logger,
  ];

  return createStore(rootReducer, compose(applyMiddleware(...middlewares)));
}

export default configureStore;