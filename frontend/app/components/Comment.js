import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div className='comment-wrapper'>
      <div className='comment-author'>
        <div style={{
              backgroundImage: `url(${comment.author.img})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            className='comment-img-wrapper'>
        </div>
        <span><b>{comment.author.username}</b> posted:</span>
      </div>
      <div className='comment-text'>{comment.text}</div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}


export default Comment;
