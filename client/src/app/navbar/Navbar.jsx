import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Navbar = (props) => {
  return (
    <header>
      <h1>Rating System</h1>
      <span>{props.username ? 'Welcome: ' + props.username: ''}</span>
      <nav>
        <ul>
          <li><Link to="/">Sign in</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.signin.username,
  }
}

export default connect(mapStateToProps)(Navbar);