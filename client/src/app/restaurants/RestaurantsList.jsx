import React from 'react';
import { connect } from 'react-redux';
import RestaurantsListEntry from './RestaurantsListEntry.jsx';
import { fetchRestaurants } from './restaurants_actions.js';

class RestaurantsList extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatchFetchRestaurants();
  }
  render () {
    return (
      <div className="restaurantsList">
        <div className="subHeader">Restaurants:</div>
        <ul>
          { this.props.restaurants.map(restaurant => (
            <RestaurantsListEntry key={restaurant.id} data={restaurant} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurantsList,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchRestaurants: () => {
      dispatch(fetchRestaurants());
    },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);