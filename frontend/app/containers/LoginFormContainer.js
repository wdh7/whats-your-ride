import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import LoginForm from '../components/LoginForm';
import ShowAlert from '../components/ShowAlert';
import { resetForm } from '../helpers/resetForm';

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
    e.target.reset();

    this.props.submitLogin(this.state)
      .then(res => {
        if (res.redirect) {
          // Successfully logged in. Redirect to homepage
          // and set jwt in local storage
          localStorage.setItem('jwt', this.props.auth.authedUser.jwt);
          this.props.history.push('/');
        } else {
          // Error with log in. Reset component state.
          resetForm.call(this, this.state);
        }
      })
  }

  render() {
    const { regSuccessMsg, authedErrorMsg } = this.props.auth;

    return (
      <div className='login-wrapper'>

        {regSuccessMsg
          ? <ShowAlert color='success' text={`${regSuccessMsg}. Proceed with login`} />
          : null
        }

        {authedErrorMsg
          ? <ShowAlert color='danger' text={authedErrorMsg} />
          : null
        }

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
