import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PublicNavBar from './PublicNavBar';
import AuthedNavBar from './AuthedNavBar';

function NavBar() {
  const jwt = localStorage.getItem('jwt');

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

          { jwt ? <AuthedNavBar /> : <PublicNavBar /> }
        </ul>
      </div>
    </nav>
  )
}


export default NavBar;
