import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';


class User extends Component {
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
    const { user } = this.props;
    const imgStyles = {
      backgroundImage: `url(${user.img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }

    return (
      <div>
        <div className='owner-section'>
          <span><b>Owner: </b></span>
          <div className='owner-stamp'>
            <div className='owner-img'
                 style={imgStyles}
                 id='Popover1' onClick={this.toggle}
            >
            </div>
            <span><i>{user.username}</i></span>
          </div>
        </div>
        <Popover placement="top-start" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>
            <img src={user.img} alt={`${user.username} Avatar Image`} />
          </PopoverHeader>
          <PopoverBody>
            <h3>{user.username}</h3>
            <p>Located at {user.location}</p>
            <p>Favorite tagline: {user.tagline}</p>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
}


export default User;
