import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div>
          <i className='fa fa-car fa-fw'></i>
          <span id='logo'>Whats Your Ride</span>
        </div>

        <ul className='nav'>
          <li>
            <NavLink to='/' exact activeClassName='active'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/register' activeClassName='active'>Register</NavLink>
          </li>
          <li>
            <NavLink to='/login' activeClassName='active'>Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default NavBar;
