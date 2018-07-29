import React from 'react';
import PropTypes from 'prop-types';
import CommentFormContainer from '../containers/CommentFormContainer';

function CommentsHeader({ comments }) {
  return (
    <div className='comments-counter'>
      <p><b>{comments.length} Comments:</b></p>
      <CommentFormContainer />
    </div>
  )
}

CommentsHeader.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default CommentsHeader;
