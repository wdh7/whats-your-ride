import React from 'react';
import PropTypes from 'prop-types';

function TimeStamp({ label, time }) {
  return (
    <span className='timestamp'>
      {label}: {new Date(time).toDateString()}
    </span>
  )
}

TimeStamp.propTypes = {
  label: PropTypes.string.isRequired
}

export default TimeStamp;
