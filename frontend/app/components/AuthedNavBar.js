import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

function AuthedNavBar({ logOut }) {
  return (
    <div className='nav'>
      <li>
        <NavLink to='/profile' activeClassName='active'>Profile</NavLink>
      </li>
      <li onClick={logOut}>
        <Link to='/'>Logout</Link>
      </li>
    </div>
  )
}

AuthedNavBar.propTypes = {
  logOut: PropTypes.func.isRequired
}

export default AuthedNavBar;
