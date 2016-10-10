import { FETCH_RESTAURANTS, FETCH_AVGRATING } from './restaurants_actions.js';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_RESTAURANTS:
      return action.payload
  }
  return state;
}
