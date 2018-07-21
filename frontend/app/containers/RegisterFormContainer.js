import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import RegisterForm from '../components/RegisterForm';

class RegisterFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      location: '',
      tagline: '',
      img: ''
    }
  }

  // update state with user input from the registration form
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Submit user form data to the backend.
  // If successful in registering, redirect to '/login' path
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.register(this.state)
      .then(res => {
        if (res.redirect) {
          this.props.history.push('/login');
        }
      })
  }

  render() {
    return (
      <div className='register-wrapper'>
        <h3>Registration Form</h3>
        <RegisterForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    register: (formData) => {
      return dispatch(register(formData));
    }
  }
}

export default connect(null, mapDispatchToProps)(RegisterFormContainer);
