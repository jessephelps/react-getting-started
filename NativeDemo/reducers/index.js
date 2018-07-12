import { combineReducers } from 'redux';
import { quotes } from './quotes';

const quoteApp = combineReducers({
  quotes,
});

export default quoteApp;