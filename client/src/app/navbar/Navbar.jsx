import React from 'react';
import { Link } from 'react-router';

const Navbar = (props) => {
  return (
    <header>
      <h1>Rating System</h1>
      <nav>
        <ul>
          <li><Link to="/">Signin</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;