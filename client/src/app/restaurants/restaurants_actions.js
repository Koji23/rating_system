import fetch from 'isomorphic-fetch';
export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';
export const FETCH_AVGRATING = 'FETCH_AVGRATING';


export const fetchRestaurants = () => {
  const URL = 'http://localhost:3000/api';
  let request = fetch(`${URL}/restaurants`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return {
    type: FETCH_RESTAURANTS,
    payload: request
    .then(res => res.json())
    .then(res => {
      return res;
    })
    .catch(function(err) {
      console.log(err);
    })
  };
}
