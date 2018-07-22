import React from 'react';
import { NavLink } from 'react-router-dom';

function AuthedNavBar() {
  return (
    <div className='nav'>
      <li>
        <NavLink to='/profile' activeClassName='active'>Profile</NavLink>
      </li>
      <li>
        <NavLink to='/logout' activeClassName='active'>Logout</NavLink>
      </li>
    </div>
  )
}


export default AuthedNavBar;
