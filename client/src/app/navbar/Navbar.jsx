import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Navbar = (props) => {
  return (
    <header>
      <h1>Rating System</h1>
      <nav>
        <ul>
          <li><Link to="/">Signin</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
          <li><span>{props.username}</span></li>
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