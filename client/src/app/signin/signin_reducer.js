import { UPDATE_USERNAME } from './signin_actions.js';

const initUser = {
  username: '',
}

export default (state = initUser, action) => {
  console.log(action);
  switch(action.type) {
    case UPDATE_USERNAME:
      console.log('user reducer : ', action.payload);
      if(action.payload.username) {
        return Object.assign({}, state, {
          username: action.payload,
        });
      } else {
        return state;
      }
  }
  return state;
}