import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className='centering'>
      <nav className= "navFont">
        <NavLink to="/" style = {{color:"white"}}>Home</NavLink>
        <NavLink  to="/equipment"style = {{color:"white"}}>Equipment</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
