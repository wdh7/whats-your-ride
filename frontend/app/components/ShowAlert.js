import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';

function ShowAlert({ color, text }) {
  return (
    <UncontrolledAlert color={color}>
      {text}
    </UncontrolledAlert>
  )
}

ShowAlert.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ShowAlert;
