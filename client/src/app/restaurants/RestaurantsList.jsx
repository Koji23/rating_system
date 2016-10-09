import React from 'react';
import RestaurantsListEntry from './RestaurantsListEntry.jsx';

const RestaurantsList = () => {
  return (
    <div className="restaurantsList">
      <div className="subHeader">Restaurants:</div>
      <ul>
        <li><RestaurantsListEntry /></li>
        <li><RestaurantsListEntry /></li>
      </ul>
    </div>
  );
}

export default RestaurantsList;