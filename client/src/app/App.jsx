import React from 'react';
import Navbar from './navbar/Navbar.jsx';
 
const App = (props) => (
  <div className="container">
    <Navbar />
    <div>
      { props.children } 
    </div>
  </div>
);

export default App;