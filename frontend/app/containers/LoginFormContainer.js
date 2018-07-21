import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className='login-wrapper'>
        <h3>Login Form</h3>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
