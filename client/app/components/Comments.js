import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments }) {
  return (
    <div>
      <ul>
        {comments.map(comment => {
          return (
            <Comment
              comment={comment}
              key={comment.id}
              popoverId={comment.id}
            />
          )
        })}
      </ul>
    </div>
  )
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Comments;
