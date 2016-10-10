import { UPDATE_USERNAME } from './signin_actions.js';

const initUser = {
  username: '',
  id: ''
}

export default (state = initUser, action) => {
  switch(action.type) {
    case UPDATE_USERNAME:
      if(action.payload.username) {
        console.log('from reducer signin', action.payload);
        return Object.assign({}, state, {
          username: action.payload.username,
          id: action.payload.id
        });
      } else {
        return state; 
      }
  }
  return state;
}