import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';

function Comments({ comments }) {
  return (
    <div>
      <ul>
        {comments.map(comment => <Comment comment={comment} key={comment.id} />)}
      </ul>
    </div>
  )
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Comments;
