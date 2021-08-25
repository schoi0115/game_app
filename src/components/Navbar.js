import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className='centering'>
      <nav className= "NavLink">
        <NavLink to="/">Front</NavLink>
        <NavLink  to="/wishes">Wishes</NavLink>
        <NavLink  to="/equipment">Equipment</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
