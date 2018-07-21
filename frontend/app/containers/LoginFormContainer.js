import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { login } from '../actions/auth';

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  // Update state when user types in the login form
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Submit user login data to backend.
  // Redirect to homepage if successfully logged in.
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.submitLogin(this.state)
      .then(res => {
        if (res.redirect) {
          this.props.history.push('/');
        }
      })
  }

  render() {
    return (
      <div className='login-wrapper'>
        <h3>Login Form</h3>
        <LoginForm handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}


function mapDispatchToProps(dispatch) {
  return {
    submitLogin: (formData) => {
      return dispatch(login(formData));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
