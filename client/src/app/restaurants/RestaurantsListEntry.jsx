import React from 'react';
import { connect } from 'react-redux';
// import { fetchAvg  Rating } from './restaurants_actions.js';
import fetch from 'isomorphic-fetch';

class RestaurantsListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRatings: 0,
      avgRating: 0,
      score: 3,
    }
    this.fetchAvgRating(this.props.data.id);
  }
  fetchAvgRating (restaurant_id) {
    let context = this;
    let request = fetch('http://localhost:3000/api/ratingAvg', {
      method: 'PUT',
      body: JSON.stringify({
        restaurant_id: restaurant_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(res => {
      context.setState({
        numRatings: res.num,
        avgRating: res.avg
      });
    })
    .catch(function(err) {
      console.log(err);
    })
  }
  postRating (e, score) {
    console.log('posting rating...', JSON.stringify({
          rating: score.value,
          user_id: this.props.user_id,
          restaurant_id: this.props.data.id
        }));
    if(this.props.user_id) {
      let context = this;
      let request = fetch('http://localhost:3000/api/rating', {
        method: 'POST',
        body: JSON.stringify({
          rating: score.value,
          user_id: this.props.user_id,
          restaurant_id: this.props.data.id
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(res => {
        if(res.msg){
          alert(res.msg)
        } else {
          context.fetchAvgRating(this.props.data.id);
        }
      })
      .catch(function(err) {
        console.log(err);
      })
    } else {
      console.log(this.props.user_id);
    }
  }
  handleInputChange (e, score) {
    this.setState({
      score: score.value
    })
  }
  render() {
    let score;
    return (
      <div className="restaurantsListEntry">
        <h3>{this.props.data.name}</h3>
        <div className="details">
          <div>Number of ratings: {this.state.numRatings}</div>
          <div>Average rating: {this.state.avgRating}</div>
        </div>
        <img src={this.props.data.imageURL} />
        <input type="range" ref={node => score = node} onChange={e => this.handleInputChange.bind(this)(e, score)}min="0" max="5"/>
        <span>Your Rating: {this.state.score}</span>
        <button onClick={e => this.postRating(e, score)}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rating: state.restaurantsList.ratings,
    user_id: state.signin.id,
  }
};

export default connect(mapStateToProps)(RestaurantsListEntry);