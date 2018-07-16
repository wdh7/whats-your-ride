import React from 'react';
import PropTypes from 'prop-types';

function CommentsCounter({ comments }) {
  return (
    <div className='comments-counter'>
      <p><b>{comments.length} Comments:</b></p>
    </div>
  )
}

CommentsCounter.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default CommentsCounter;
