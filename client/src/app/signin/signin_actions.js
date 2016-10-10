import fetch from 'isomorphic-fetch';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
import { browserHistory } from 'react-router';

const URL = 'http://localhost:3000/api';

export const signupUser = (username, password) => {
  console.log(username, password);
  let request = fetch(`${URL}/signup`, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    type: UPDATE_USERNAME,
    payload: request
    .then(res => res.json())
    .then(res => {
      if(res.username){
        browserHistory.push('/restaurants');
      }
      return res;
    })
    .catch(function(err) {
      console.log(err);
    })
  }
};


export const loginUser = (username, password) => {
  console.log(username, password);
  let request = fetch(`${URL}/login`, {
    method: 'PUT',
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    type: UPDATE_USERNAME,
    payload: request
    .then(res => res.json())
    .then(res => {
      if(res.username){
        browserHistory.push('/restaurants');
      }
      return res;
    })
    .catch(function(err) {
      console.log(err);
    })
  }
};
