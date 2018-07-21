import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import RegisterForm from '../components/RegisterForm';
import ShowAlert from '../components/ShowAlert';
import { resetForm } from '../helpers/resetForm';

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
    // reset the form fields
    e.target.reset();

    this.props.register(this.state)
      .then(res => {
        if (res.redirect) {
          // Success block: redirect to login page
          this.props.history.push('/login');
        } else {
          // Error block: reset component state so user can re-enter registration info
          resetForm.call(this, this.state);
        }
      })
  }

  render() {
    const regErrorMsg = this.props.auth.regErrorMsg;

    return (
      <div className='register-wrapper'>
        {regErrorMsg
          ? <ShowAlert color='danger' text={regErrorMsg} />
          : null
        }
        <h3>Registration Form</h3>
        <RegisterForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
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
    register: (formData) => {
      return dispatch(register(formData));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormContainer);
