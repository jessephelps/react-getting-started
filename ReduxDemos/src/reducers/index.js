import { combineReducers } from 'redux';
import { projects } from './quotes';

const todoApp = combineReducers({
  projects,
});

export default todoApp;