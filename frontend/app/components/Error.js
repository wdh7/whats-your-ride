import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Error({ message }) {
  return (
    <h1>
      Error: {message}
    </h1>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired
}


export default Error;
