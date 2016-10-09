import { combineReducers } from 'redux';
import signInReducer from './app/signin/signin_reducer.js';

const rootReducer = combineReducers({
  signin: signInReducer,
});

export default rootReducer;