import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import TimeStamp from './TimeStamp';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false
    };
  }

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const { comment, popoverId } = this.props;
    const imgStyles = {
          backgroundImage: `url(${comment.author.img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
    }

    return (
      <div>
        <div className='comment-wrapper'>
          <div className='comment-author'>
            <div style={imgStyles}
                 className='comment-img-wrapper'
                 id={`Popover${popoverId}`} onClick={this.toggle}
            >
            </div>
            <div className='comment-header'>
              <span><b>{comment.author.username}</b> posted:</span>
              <TimeStamp label='Post Date' time={comment.createdAt} />
            </div>
          </div>
          <div className='comment-text'>{comment.text}</div>
        </div>
        <Popover placement="top-start" isOpen={this.state.popoverOpen} target={`Popover${popoverId}`} toggle={this.toggle}>
          <PopoverHeader>
            <img src={comment.author.img} alt={`${comment.author.username} Avatar Image`} />
          </PopoverHeader>
          <PopoverBody>
            <h3>{comment.author.username}</h3>
            <p>Located at {comment.author.location}</p>
            <p>Favorite tagline: {comment.author.tagline}</p>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  popoverId: PropTypes.string.isRequired
}


export default Comment;
