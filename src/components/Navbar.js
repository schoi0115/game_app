import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <nav className= "NavLink">
        <NavLink to="/">Front</NavLink>
        <NavLink  to="/wishes">Wishes</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
