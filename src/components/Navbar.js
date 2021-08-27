import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className='centering'>
      <nav className= "NavLink">
        <NavLink to="/">Home</NavLink>
        <NavLink  to="/equipment">Equipment</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
