import { combineReducers } from 'redux';
import signInReducer from './app/signin/signin_reducer.js';
import restaurantsReducer from './app/restaurants/restaurants_reducer.js';

const rootReducer = combineReducers({
  signin: signInReducer,
  restaurantsList: restaurantsReducer
});

export default rootReducer;