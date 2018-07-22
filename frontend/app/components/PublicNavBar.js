import React from 'react';
import { NavLink } from 'react-router-dom';

function PublicNavBar() {
  return (
    <div className='nav'>
      <li>
        <NavLink to='/register' activeClassName='active'>Register</NavLink>
      </li>
      <li>
        <NavLink to='/login' activeClassName='active'>Login</NavLink>
      </li>
    </div>
  )
}


export default PublicNavBar;
