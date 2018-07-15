import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  const imgStyles = {
    backgroundImage: `url(${user.img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='owner-section'>
      <span>Owner: </span>
      <div className='owner-stamp'>
        <div className='owner-img' style={imgStyles}></div>
        <span>{user.username} from {user.location}</span>
      </div>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired
}


export default User;
