import React from 'react';

const RestaurantsListEntry = () => {
  let handleRating = (e, rating) => {
    console.log(rating.value);
  };
  let rating;
  return (
    <div className="restaurantsListEntry">
      <h3>Souplantation</h3>
      <img src="https://www.mnkysoft.com/dev116/usercontent/XImages/Catering-Spread_med.jpg" />
      <input type="range" ref={node => rating = node} min="0" max="10"/>
      <button onClick={e => handleRating(e, rating)}>Save</button>
    </div>
  );
}

export default RestaurantsListEntry;